import { StyleSheet } from 'react-native';
import { theme } from '../theme/theme';

export const commonStyles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: theme.background,
    },
    topBar: {
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff12',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    backButton: {
        width: 38,
        height: 38,
        borderRadius: 11,
        borderWidth: 1,
        borderColor: '#ffffff22',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0d0f14',
    },
    backButtonText: {
        color: theme.foreground,
        fontSize: 18,
        fontWeight: '700',
        marginTop: -2,
    },
    topTitleWrap: {
        flex: 1,
    },
    topTitle: {
        color: theme.foreground,
        fontSize: 21,
        fontWeight: '700',
    },
    topSubtitle: {
        color: '#8f8f99',
        fontSize: 13,
        marginTop: 2,
    },
});
