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
    card: {
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#ffffff14',
        backgroundColor: '#0d1016',
    },
    primaryButton: {
        height: 52,
        borderRadius: 12,
        backgroundColor: theme.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
    },
    primaryButtonText: {
        color: theme.primaryForeground,
        fontSize: 17,
        fontWeight: '700',
    },
    input: {
        height: 52,
        borderRadius: 12,
        backgroundColor: theme.inputBackground,
        borderWidth: 1,
        borderColor: '#ffffff1f',
        color: theme.foreground,
        fontSize: 16,
        paddingHorizontal: 12,
        marginTop: 8,
    },
});
