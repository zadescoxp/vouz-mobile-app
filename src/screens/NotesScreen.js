import { Pressable, Text, TextInput, View } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { styles } from '../styles/notesStyles';
import { theme } from '../theme/theme';

export function NotesScreen({ draftNote, setDraftNote, isMaster, onBack, onSave }) {
    return (
        <View style={commonStyles.screen}>
            <View style={commonStyles.topBar}>
                <Pressable style={commonStyles.backButton} onPress={onBack}>
                    <Text style={commonStyles.backButtonText}>&lt;</Text>
                </Pressable>
                <View style={commonStyles.topTitleWrap}>
                    <Text style={commonStyles.topTitle}>Locker Notes</Text>
                    <Text style={commonStyles.topSubtitle}>{isMaster ? 'Editable by master key' : 'View only with public key'}</Text>
                </View>
            </View>

            <View style={styles.content}>
                <TextInput
                    style={[commonStyles.input, styles.notesInput]}
                    value={draftNote}
                    onChangeText={setDraftNote}
                    placeholder="Write something for this locker..."
                    placeholderTextColor={theme.mutedForeground}
                    editable={isMaster}
                    multiline
                />

                {isMaster ? (
                    <Pressable style={commonStyles.primaryButton} onPress={onSave}>
                        <Text style={commonStyles.primaryButtonText}>Save Note</Text>
                    </Pressable>
                ) : null}
            </View>
        </View>
    );
}
