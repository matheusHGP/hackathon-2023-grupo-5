import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PageWithHeader({ children }) {
    const insets = useSafeAreaInsets()
    // return <View style={{ ...styles.container, paddingBottom: 100 }}>{children}</View>
    return <View style={{...styles.container, paddingBottom: insets.bottom}}>{children}</View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 0,
        paddingTop: 0,
        paddingBottom: 0,
        padding: 20,
        // bottom: insets.bottom
    },
});