import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { styles } from '../styles/fileActionsStyles';

export function FileActionsScreen({ file, isMaster, onBack, onAction }) {
    if (!file) {
        return (
            <View style={commonStyles.screen}>
                <View style={commonStyles.topBar}>
                    <Pressable style={commonStyles.backButton} onPress={onBack}>
                        <Text style={commonStyles.backButtonText}>&lt;</Text>
                    </Pressable>
                    <View style={commonStyles.topTitleWrap}>
                        <Text style={commonStyles.topTitle}>File Actions</Text>
                        <Text style={commonStyles.topSubtitle}>File not found</Text>
                    </View>
                </View>
            </View>
        );
    }

    const run = (action) => {
        const result = onAction(action);
        if (typeof result === 'string' && result.length > 0) {
            Alert.alert('Info', result);
        }
    };

    return (
        <View style={commonStyles.screen}>
            <View style={commonStyles.topBar}>
                <Pressable style={commonStyles.backButton} onPress={onBack}>
                    <Text style={commonStyles.backButtonText}>&lt;</Text>
                </Pressable>
                <View style={commonStyles.topTitleWrap}>
                    <Text style={commonStyles.topTitle}>File Actions</Text>
                    <Text style={commonStyles.topSubtitle}>{file.name}</Text>
                </View>
            </View>

            <ScrollView style={styles.content} contentContainerStyle={styles.contentPad}>
                <Pressable style={styles.actionRow} onPress={() => run('preview')}>
                    <Text style={styles.actionText}>Preview</Text>
                </Pressable>
                <Pressable style={styles.actionRow} onPress={() => run('download')}>
                    <Text style={styles.actionText}>Download</Text>
                </Pressable>
                <Pressable style={styles.actionRow} onPress={() => run('share')}>
                    <Text style={styles.actionText}>Share</Text>
                </Pressable>
                <Pressable style={styles.actionRow} onPress={() => run('details')}>
                    <Text style={styles.actionText}>Details</Text>
                </Pressable>
                <Pressable style={styles.actionRow} onPress={() => run('print')}>
                    <Text style={styles.actionText}>Print</Text>
                </Pressable>

                {isMaster ? (
                    <>
                        <Pressable style={styles.actionRow} onPress={() => run('pin')}>
                            <Text style={styles.actionText}>{file.pinned ? 'Unpin' : 'Pin'}</Text>
                        </Pressable>
                        <Pressable style={styles.actionRow} onPress={() => run('rename')}>
                            <Text style={styles.actionText}>Rename</Text>
                        </Pressable>
                        <Pressable style={styles.actionRow} onPress={() => run('duplicate')}>
                            <Text style={styles.actionText}>Duplicate</Text>
                        </Pressable>
                        <Pressable style={styles.actionRow} onPress={() => run('fileKey')}>
                            <Text style={styles.actionText}>Create File Key</Text>
                        </Pressable>
                        <Pressable style={styles.actionRow} onPress={() => run('move')}>
                            <Text style={styles.actionText}>Move To Folder</Text>
                        </Pressable>
                        <Pressable style={styles.actionRow} onPress={() => run('delete')}>
                            <Text style={styles.actionTextDanger}>Delete</Text>
                        </Pressable>
                    </>
                ) : null}
            </ScrollView>
        </View>
    );
}
