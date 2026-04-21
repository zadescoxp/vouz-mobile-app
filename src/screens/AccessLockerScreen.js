import { Pressable, Text, TextInput, View } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { styles } from '../styles/accessLockerStyles';
import { theme } from '../theme/theme';

export function AccessLockerScreen({ accessKey, onChangeKey, onContinue, onBack }) {
    return (
        <View style={commonStyles.screen}>
            <View style={commonStyles.topBar}>
                <Pressable style={commonStyles.backButton} onPress={onBack}>
                    <Text style={commonStyles.backButtonText}>&lt;</Text>
                </Pressable>
                <View style={commonStyles.topTitleWrap}>
                    <Text style={commonStyles.topTitle}>Access Locker</Text>
                    <Text style={commonStyles.topSubtitle}>Enter a master or public key</Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.card}>
                    <Text style={styles.label}>PASSKEY</Text>
                    <TextInput
                        value={accessKey}
                        onChangeText={onChangeKey}
                        style={commonStyles.input}
                        placeholder="Paste your key here..."
                        placeholderTextColor={theme.mutedForeground}
                        autoCapitalize="none"
                    />
                </View>

                <Pressable style={commonStyles.primaryButton} onPress={onContinue}>
                    <Text style={commonStyles.primaryButtonText}>Continue</Text>
                </Pressable>
            </View>
        </View>
    );
}
