import { Pressable, Text, View } from 'react-native';
import { styles } from '../styles/homeStyles';

export function HomeScreen({ onCreatePress, onAccessPress }) {
    return (
        <View style={styles.screen}>
            <View style={styles.heroWrap}>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>No login required</Text>
                </View>

                <Text style={styles.logo}>VOUZ</Text>
                <Text style={styles.tagline}>Share files instantly.</Text>
                <Text style={styles.tagline}>No accounts, no hassle.</Text>
            </View>

            <View style={styles.actionsWrap}>
                <Pressable style={styles.primaryButton} onPress={onCreatePress}>
                    <Text style={styles.primaryButtonIcon}>+</Text>
                    <Text style={styles.primaryButtonText}>Create Locker</Text>
                    <Text style={styles.primaryButtonArrow}>-&gt;</Text>
                </Pressable>

                <Pressable style={styles.secondaryButton} onPress={onAccessPress}>
                    <Text style={styles.secondaryButtonIcon}>[]</Text>
                    <Text style={styles.secondaryButtonText}>Access Locker</Text>
                    <Text style={styles.secondaryButtonArrow}>-&gt;</Text>
                </Pressable>

                <Text style={styles.footerText}>Secure . Fast . Simple</Text>
            </View>
        </View>
    );
}
