import { StyleSheet, Text, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, HStack } from "native-base";
import Page from '../../components/Page'
import TransactionCard from '../../components/TransactionCard';
import OptionCard from '../../components/OptionCard';

export default function Home() {

    return (
        <Page>
            {/* <Box> */}
            {/* <Text>Home</Text> */}
            {/* <TransactionCard category="Causa Humanitária Brumadinho" /> */}
            <ScrollView>
                <HStack flexWrap="wrap" justifyContent="center">
                    <OptionCard />
                    <OptionCard />
                    <OptionCard />
                    <OptionCard />
                    <OptionCard />
                    <OptionCard />
                </HStack>
            </ScrollView>
            {/* </Box> */}
        </Page>
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
