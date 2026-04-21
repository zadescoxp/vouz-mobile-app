import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 14,
    },
    card: {
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#ffffff14',
        backgroundColor: '#0d1016',
        padding: 14,
    },
    label: {
        color: '#a5a5b0',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.8,
        marginTop: 8,
        marginBottom: 6,
    },
    keyBox: {
        height: 50,
        borderRadius: 12,
        backgroundColor: '#16171c',
        borderWidth: 1,
        borderColor: '#ffffff1f',
        justifyContent: 'center',
        paddingHorizontal: 12,
    },
    keyText: {
        color: '#f2f2f7',
        fontSize: 16,
        fontWeight: '500',
    },
    hint: {
        color: '#7f808c',
        fontSize: 12,
        marginTop: 6,
        marginBottom: 4,
    },
});
