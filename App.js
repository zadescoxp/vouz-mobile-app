import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Alert, Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AccessLockerScreen } from './src/screens/AccessLockerScreen';
import { CreateLockerScreen } from './src/screens/CreateLockerScreen';
import { FileActionsScreen } from './src/screens/FileActionsScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { LockerScreen } from './src/screens/LockerScreen';
import { NotesScreen } from './src/screens/NotesScreen';
import { UpgradeScreen } from './src/screens/UpgradeScreen';
import { createKeys, createMockLocker } from './src/data/mockLocker';
import { folderPalette, theme } from './src/theme/theme';

const routes = {
    home: 'home',
    create: 'create',
    access: 'access',
    locker: 'locker',
    fileActions: 'fileActions',
    notes: 'notes',
    upgrade: 'upgrade',
};

export default function App() {
    const [route, setRoute] = useState({ name: routes.home, params: {} });
    const [accessKey, setAccessKey] = useState('');
    const [lockerKeys, setLockerKeys] = useState(createKeys());
    const [locker, setLocker] = useState(createMockLocker());
    const [role, setRole] = useState('public');
    const [draftNote, setDraftNote] = useState(locker.notes);
    const [folderColorPicker, setFolderColorPicker] = useState({ visible: false, folderId: null });

    const isMaster = role === 'master';

    const selectedFile = useMemo(() => {
        const fileId = route.params?.fileId;
        if (!fileId) {
            return null;
        }
        return locker.files.find((file) => file.id === fileId) || null;
    }, [locker.files, route.params]);

    const go = (name, params = {}) => setRoute({ name, params });

    const startCreateFlow = () => {
        const freshLocker = createMockLocker();
        setLocker(freshLocker);
        setLockerKeys(createKeys());
        setDraftNote(freshLocker.notes);
        setRole('master');
        go(routes.create);
    };

    const startAccessFlow = () => {
        setAccessKey('');
        go(routes.access);
    };

    const continueAccess = () => {
        const trimmedKey = accessKey.trim();
        if (!trimmedKey) {
            Alert.alert('Key required', 'Please paste a master or public key.');
            return;
        }
        setRole(trimmedKey.startsWith('master-') ? 'master' : 'public');
        go(routes.locker);
    };

    const handleFileAction = (action) => {
        if (!selectedFile) {
            return '';
        }

        if (action === 'preview' || action === 'download' || action === 'share' || action === 'details' || action === 'print') {
            return `${action.toUpperCase()} on ${selectedFile.name}`;
        }

        if (!isMaster) {
            return 'Only master key can perform this action.';
        }

        if (action === 'pin') {
            setLocker((prev) => ({
                ...prev,
                files: prev.files.map((file) =>
                    file.id === selectedFile.id ? { ...file, pinned: !file.pinned } : file
                ),
            }));
            return selectedFile.pinned ? 'File unpinned.' : 'File pinned.';
        }

        if (action === 'rename') {
            setLocker((prev) => ({
                ...prev,
                files: prev.files.map((file) =>
                    file.id === selectedFile.id
                        ? {
                            ...file,
                            name: file.name.includes('(Renamed)') ? file.name : `${file.name} (Renamed)`,
                        }
                        : file
                ),
            }));
            return 'File renamed.';
        }

        if (action === 'duplicate') {
            const duplicate = {
                ...selectedFile,
                id: `f${Date.now()}`,
                name: `${selectedFile.name} Copy`,
                pinned: false,
            };
            setLocker((prev) => ({ ...prev, files: [duplicate, ...prev.files] }));
            return 'File duplicated.';
        }

        if (action === 'fileKey') {
            return `File key: file-${Math.random().toString(36).slice(2, 10)}`;
        }

        if (action === 'move') {
            const currentIndex = locker.folders.findIndex((folder) => folder.id === selectedFile.folderId);
            const nextFolder = locker.folders[(currentIndex + 1) % locker.folders.length];
            setLocker((prev) => ({
                ...prev,
                files: prev.files.map((file) =>
                    file.id === selectedFile.id ? { ...file, folderId: nextFolder.id } : file
                ),
            }));
            return `Moved to ${nextFolder.name}.`;
        }

        if (action === 'delete') {
            setLocker((prev) => ({ ...prev, files: prev.files.filter((file) => file.id !== selectedFile.id) }));
            go(routes.locker);
            return 'File deleted.';
        }

        return '';
    };

    const openFolderColorPicker = (folderId) => {
        if (!isMaster) {
            return;
        }
        setFolderColorPicker({ visible: true, folderId });
    };

    const setFolderColor = (color) => {
        if (!folderColorPicker.folderId) {
            return;
        }
        setLocker((prev) => ({
            ...prev,
            folders: prev.folders.map((folder) =>
                folder.id === folderColorPicker.folderId ? { ...folder, color } : folder
            ),
        }));
        setFolderColorPicker({ visible: false, folderId: null });
    };

    const saveNotes = () => {
        setLocker((prev) => ({ ...prev, notes: draftNote }));
        go(routes.locker);
    };

    const upgradeLocker = () => {
        if (!isMaster) {
            Alert.alert('Access denied', 'Only master key can upgrade locker.');
            return;
        }
        setLocker((prev) => ({
            ...prev,
            totalMB: 10240,
            speed: 'Turbo',
            security: 'Advanced Shield',
        }));
        Alert.alert('Success', 'Locker upgraded to Pro.');
        go(routes.locker);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />

            {route.name === routes.home ? (
                <HomeScreen onCreatePress={startCreateFlow} onAccessPress={startAccessFlow} />
            ) : null}

            {route.name === routes.create ? (
                <CreateLockerScreen
                    lockerKeys={lockerKeys}
                    onBack={() => go(routes.home)}
                    onOpenLocker={() => go(routes.locker)}
                />
            ) : null}

            {route.name === routes.access ? (
                <AccessLockerScreen
                    accessKey={accessKey}
                    onChangeKey={setAccessKey}
                    onContinue={continueAccess}
                    onBack={() => go(routes.home)}
                />
            ) : null}

            {route.name === routes.locker ? (
                <LockerScreen
                    locker={locker}
                    isMaster={isMaster}
                    onBack={() => go(routes.home)}
                    onOpenFile={(fileId) => go(routes.fileActions, { fileId })}
                    onOpenNotes={() => go(routes.notes)}
                    onOpenUpgrade={() => go(routes.upgrade)}
                    onOpenFolderColor={openFolderColorPicker}
                />
            ) : null}

            {route.name === routes.fileActions ? (
                <FileActionsScreen
                    file={selectedFile}
                    isMaster={isMaster}
                    onBack={() => go(routes.locker)}
                    onAction={handleFileAction}
                />
            ) : null}

            {route.name === routes.notes ? (
                <NotesScreen
                    draftNote={draftNote}
                    setDraftNote={setDraftNote}
                    isMaster={isMaster}
                    onBack={() => go(routes.locker)}
                    onSave={saveNotes}
                />
            ) : null}

            {route.name === routes.upgrade ? (
                <UpgradeScreen
                    isMaster={isMaster}
                    locker={locker}
                    onBack={() => go(routes.locker)}
                    onUpgrade={upgradeLocker}
                />
            ) : null}

            <Modal transparent visible={folderColorPicker.visible} animationType="slide">
                <Pressable
                    style={styles.overlay}
                    onPress={() => setFolderColorPicker({ visible: false, folderId: null })}
                >
                    <Pressable style={styles.sheet} onPress={() => { }}>
                        <View style={styles.sheetHandle} />
                        <Text style={styles.sheetTitle}>Folder Color</Text>
                        <Text style={styles.sheetSubtitle}>Master key can customize folder colors</Text>

                        <View style={styles.colorGrid}>
                            {folderPalette.map((color) => (
                                <Pressable
                                    key={color}
                                    style={[styles.colorSwatch, { backgroundColor: color }]}
                                    onPress={() => setFolderColor(color)}
                                />
                            ))}
                        </View>
                    </Pressable>
                </Pressable>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
    },
    overlay: {
        flex: 1,
        backgroundColor: '#00000088',
        justifyContent: 'flex-end',
    },
    sheet: {
        backgroundColor: '#05060c',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        borderWidth: 1,
        borderBottomWidth: 0,
        borderColor: '#ffffff1a',
        paddingHorizontal: 18,
        paddingTop: 12,
        paddingBottom: 24,
        minHeight: 220,
    },
    sheetHandle: {
        width: 78,
        height: 6,
        borderRadius: 99,
        backgroundColor: '#f5f5f5',
        alignSelf: 'center',
        marginBottom: 16,
    },
    sheetTitle: {
        color: theme.cardForeground,
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 6,
    },
    sheetSubtitle: {
        color: '#8d8d97',
        fontSize: 15,
        marginBottom: 14,
    },
    colorGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    colorSwatch: {
        width: 42,
        height: 42,
        borderRadius: 999,
        borderWidth: 2,
        borderColor: '#ffffff2f',
    },
});
