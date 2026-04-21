import { Pressable, Text, View } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { styles } from '../styles/upgradeStyles';

export function UpgradeScreen({ isMaster, locker, onBack, onUpgrade }) {
    return (
        <View style={commonStyles.screen}>
            <View style={commonStyles.topBar}>
                <Pressable style={commonStyles.backButton} onPress={onBack}>
                    <Text style={commonStyles.backButtonText}>&lt;</Text>
                </Pressable>
                <View style={commonStyles.topTitleWrap}>
                    <Text style={commonStyles.topTitle}>Upgrade Locker</Text>
                    <Text style={commonStyles.topSubtitle}>Storage, speed, and security</Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.planCard}>
                    <Text style={styles.planName}>Pro Locker</Text>
                    <Text style={styles.planMeta}>Current size: {(locker.totalMB / 1024).toFixed(0)} GB</Text>
                    <Text style={styles.planMeta}>Upgrade size: 10 GB</Text>
                    <Text style={styles.planMeta}>Upload speed: Turbo</Text>
                    <Text style={styles.planMeta}>Security: Advanced Shield</Text>
                </View>

                {isMaster ? (
                    <Pressable style={commonStyles.primaryButton} onPress={onUpgrade}>
                        <Text style={commonStyles.primaryButtonText}>Upgrade Now</Text>
                    </Pressable>
                ) : (
                    <Text style={styles.readOnly}>Only master key user can upgrade this locker.</Text>
                )}
            </View>
        </View>
    );
}
