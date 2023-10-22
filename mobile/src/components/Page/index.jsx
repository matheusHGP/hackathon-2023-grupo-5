import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Page({ children }) {
    return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    // return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 0,
        paddingTop: 0,
        // padding: 0,
        // padding: 20
        // alignItems: 'center',
        // justifyContent: 'center'
    },
});