import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 14,
    },
    planCard: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ffffff1f',
        backgroundColor: '#11131a',
        padding: 12,
        gap: 6,
    },
    planName: {
        color: '#f3f3f8',
        fontSize: 19,
        fontWeight: '700',
        marginBottom: 2,
    },
    planMeta: {
        color: '#9a9aa4',
        fontSize: 13,
    },
    readOnly: {
        color: '#9a9aa4',
        marginTop: 14,
        fontSize: 14,
    },
});
