import { StyleSheet, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box } from "native-base";
import Page from '../../components/Page'
import TransactionCard from '../../components/TransactionCard';

export default function Home() {

    return (
        <Page>
            {/* <Box> */}
            {/* <Text>Home</Text> */}
            {/* <TransactionCard category="Causa Humanitária Brumadinho" /> */}
            <FlatList
                data={[
                    { id: 1, status: 1, ongName: 'Casa Arte Vida', name: 'Reconstrução Casas Brumadinho' },
                    { id: 2, status: 2, ongName: 'Casa da Amizade', name: 'Retirada de Pessoas das Ruas' },
                    { id: 3, status: 3, ongName: 'Centro Cidadania Ação...', name: 'Reflorestamento Ambiental' },
                    { id: 4, status: 4, ongName: 'Grupo de Trabalhos...', name: 'Apoio a Vitimas de Violencia' },
                    { id: 5, status: 4, ongName: 'Nome 5', name: 'Nome Ong 5' },
                    { id: 6, status: 3, ongName: 'Nome 6', name: 'Nome Ong 6' },
                    { id: 7, status: 2, ongName: 'Nome 7', name: 'Nome Ong 7' },
                    { id: 8, status: 1, ongName: 'Nome 8', name: 'Nome Ong 8' },
                ]}
                renderItem={
                    ({ item }) => {
                        return <TransactionCard
                            name={item.name}
                            ongName={item.ongName}
                            cause={item.ongName}
                            type={item.ongName}
                            status={item.status}
                        // date={item.name}
                        // amount={item.amount}
                        // payerName={item.payerName}
                        // operationType={item.operationType}
                        />
                    }
                }
                keyExtractor={item => item.id}
            />
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
