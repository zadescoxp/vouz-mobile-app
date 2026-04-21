import { Pressable, ScrollView, Text, View } from 'react-native';
import { styles } from '../styles/lockerStyles';

export function LockerScreen({
    locker,
    isMaster,
    onBack,
    onOpenFile,
    onOpenNotes,
    onOpenUpgrade,
    onOpenFolderColor,
}) {
    const usedPercent = Math.min(100, (locker.usedMB / locker.totalMB) * 100);
    const usedText = `${locker.usedMB.toFixed(2)} MB / ${(locker.totalMB / 1024).toFixed(0)} GB`;
    const remainingText = `${((locker.totalMB - locker.usedMB) / 1024).toFixed(2)} GB remaining`;

    const countFiles = (folderId) => locker.files.filter((file) => file.folderId === folderId).length;
    const pinnedFiles = locker.files.filter((file) => file.pinned);

    return (
        <View style={styles.screen}>
            <View style={styles.topBar}>
                <Pressable style={styles.backButton} onPress={onBack}>
                    <Text style={styles.backButtonText}>&lt;</Text>
                </Pressable>

                <View style={styles.topTitleWrap}>
                    <Text style={styles.topTitle}>{locker.name}</Text>
                    <Text style={styles.topSubTitle}>{isMaster ? 'Master Access' : 'View Only'}</Text>
                </View>

                <View style={styles.rolePill}>
                    <Text style={styles.rolePillText}>{isMaster ? 'MASTER' : 'PUBLIC'}</Text>
                </View>
            </View>

            <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollContent}>
                <View style={styles.storageCard}>
                    <View style={styles.rowBetween}>
                        <Text style={styles.storageLabel}>Storage used</Text>
                        <Text style={styles.storageValue}>{usedText}</Text>
                    </View>

                    <View style={styles.progressTrack}>
                        <View style={[styles.progressFill, { width: `${usedPercent}%` }]} />
                    </View>

                    <View style={styles.rowBetween}>
                        <Text style={styles.remainingText}>{remainingText}</Text>
                        <Text style={styles.remainingText}>{locker.speed}</Text>
                    </View>

                    <Pressable style={[styles.proButton, !isMaster && styles.proButtonDisabled]} onPress={onOpenUpgrade}>
                        <Text style={styles.proButtonText}>Upgrade Locker</Text>
                        <Text style={styles.proButtonMeta}>{locker.security}</Text>
                    </Pressable>
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Folders</Text>
                </View>

                <View style={styles.folderGrid}>
                    {locker.folders.map((folder) => (
                        <Pressable
                            key={folder.id}
                            style={styles.folderCard}
                            onLongPress={() => onOpenFolderColor(folder.id)}
                            onPress={() => { }}
                        >
                            <View style={[styles.folderIconChip, { borderColor: `${folder.color}66`, backgroundColor: `${folder.color}20` }]}>
                                <Text style={[styles.folderIconText, { color: folder.color }]}>[]</Text>
                            </View>
                            <Text style={styles.folderName}>{folder.name}</Text>
                            <Text style={styles.folderCount}>{countFiles(folder.id)} files</Text>
                            {isMaster ? (
                                <Pressable style={styles.colorEditPill} onPress={() => onOpenFolderColor(folder.id)}>
                                    <Text style={styles.colorEditPillText}>Color</Text>
                                </Pressable>
                            ) : null}
                        </Pressable>
                    ))}
                </View>

                {pinnedFiles.length > 0 ? (
                    <>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Pinned</Text>
                        </View>

                        {pinnedFiles.map((file) => (
                            <Pressable key={file.id} style={styles.fileCard} onPress={() => onOpenFile(file.id)}>
                                <View style={styles.fileLeft}>
                                    <View style={styles.fileIconWrap}>
                                        <Text style={styles.fileIcon}>[]</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.fileName}>{file.name}</Text>
                                        <Text style={styles.fileMeta}>{file.sizeMB.toFixed(2)} MB . {file.date}</Text>
                                    </View>
                                </View>
                                <Text style={styles.fileMore}>:</Text>
                            </Pressable>
                        ))}
                    </>
                ) : null}

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>All Files ({locker.files.length})</Text>
                </View>

                {locker.files.map((file) => (
                    <Pressable key={file.id} style={styles.fileCard} onPress={() => onOpenFile(file.id)}>
                        <View style={styles.fileLeft}>
                            <View style={styles.fileIconWrap}>
                                <Text style={styles.fileIcon}>[]</Text>
                            </View>
                            <View>
                                <Text style={styles.fileName}>{file.name}</Text>
                                <Text style={styles.fileMeta}>{file.sizeMB.toFixed(2)} MB . {file.date}</Text>
                            </View>
                        </View>
                        <Text style={styles.fileMore}>:</Text>
                    </Pressable>
                ))}

                <Pressable style={styles.notesCard} onPress={onOpenNotes}>
                    <Text style={styles.notesTitle}>Notes</Text>
                    <Text style={styles.notesMode}>{isMaster ? 'Editable' : 'View only'}</Text>
                    <Text style={styles.notesBody} numberOfLines={3}>
                        {locker.notes}
                    </Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}
