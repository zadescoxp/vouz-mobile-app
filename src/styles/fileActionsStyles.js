import { StyleSheet } from 'react-native';
import { theme } from '../theme/theme';

export const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    contentPad: {
        padding: 14,
        gap: 8,
    },
    actionRow: {
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ffffff18',
        backgroundColor: '#11131a',
        justifyContent: 'center',
        paddingHorizontal: 12,
    },
    actionText: {
        color: '#ececf2',
        fontSize: 15,
        fontWeight: '600',
    },
    actionTextDanger: {
        color: theme.destructive,
        fontSize: 15,
        fontWeight: '600',
    },
});
