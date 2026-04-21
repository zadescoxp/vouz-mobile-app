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
        </View>
    );
}
