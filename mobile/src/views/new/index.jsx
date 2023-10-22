import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from "native-base";

export default function New() {

    return (
        <SafeAreaView style={styles.container}>
            <Box>
                <Text>New</Text>
            </Box>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
