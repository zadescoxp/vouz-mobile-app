import { Pressable, Text, View } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { styles } from '../styles/createLockerStyles';

export function CreateLockerScreen({ lockerKeys, onBack, onOpenLocker }) {
    return (
        <View style={commonStyles.screen}>
            <View style={commonStyles.topBar}>
                <Pressable style={commonStyles.backButton} onPress={onBack}>
                    <Text style={commonStyles.backButtonText}>&lt;</Text>
                </Pressable>
                <View style={commonStyles.topTitleWrap}>
                    <Text style={commonStyles.topTitle}>Locker Created</Text>
                    <Text style={commonStyles.topSubtitle}>Save these keys before you continue</Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.card}>
                    <Text style={styles.label}>MASTER KEY</Text>
                    <View style={styles.keyBox}>
                        <Text style={styles.keyText}>{lockerKeys.master}</Text>
                    </View>
                    <Text style={styles.hint}>Full control: upload, edit, delete</Text>

                    <Text style={styles.label}>PUBLIC KEY</Text>
                    <View style={styles.keyBox}>
                        <Text style={styles.keyText}>{lockerKeys.public}</Text>
                    </View>
                    <Text style={styles.hint}>View and download only</Text>
                </View>

                <Pressable style={commonStyles.primaryButton} onPress={onOpenLocker}>
                    <Text style={commonStyles.primaryButtonText}>Open Locker</Text>
                </Pressable>
            </View>
        </View>
    );
}
