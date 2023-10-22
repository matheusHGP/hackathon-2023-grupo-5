import { useContext } from 'react'
import { StyleSheet, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, HStack, Text, VStack, Button, Icon, Progress } from "native-base";
import Page from '../../components/Page'
import PageWithHeader from '../../components/PageWithHeader'
import TransactionCard from '../../components/TransactionCard';
import OptionCard from '../../components/OptionCard';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Context } from '../../context/context'

const STATUS_COLORS = {
    0: 'red.500',
    1: 'yellow.300',
    2: 'orange.400',
    3: 'green.600',
}

const STATUS_PROGRESS = {
    0: 10,
    1: 30,
    2: 70,
    3: 100,
}

export default function Home({ navigation }) {
    // const eventData = navigation.getParam('eventData')
    const { eventData } = useContext(Context)
    console.log('aqui', eventData.status)

    const handleCardClick = (id) => {
        navigation.navigate("Detalhe da Ong")
    }

    return (
        <PageWithHeader>
            <Box mb={3}>
                <Text
                    fontWeight="medium"
                    textAlign="left"
                    color="#909090"
                    mt={0}
                >
                    Visualize todas os detalhes que a ação selecionada possui
                </Text>
            </Box>

            <VStack
                borderColor="coolGray.200"
                borderWidth="1"
                padding={5}
                borderRadius={5}
                justifyContent="space-between"
                height="lg"
            >
            <ScrollView>

                <Box mb={5}>
                    <Text
                        fontWeight="bold"
                        fontSize="md"
                    >
                        Nome da ação
                    </Text>

                    <Text
                        fontWeight="medium"
                        color="#909090"
                    >
                        {/* Reconstrução Casas Brumadinho */}
                        {eventData.name}
                    </Text>
                </Box>

                <Box mb={5}>
                    <Text
                        fontWeight="bold"
                        fontSize="md"
                    >
                        Nome da ONG
                    </Text>

                    <Text
                        fontWeight="medium"
                        color="#909090"
                    >
                        {eventData.organizationName}
                    </Text>
                </Box>

                <Box mb={5}>
                    <Text
                        fontWeight="bold"
                        fontSize="md"
                    >
                        Pontuação
                    </Text>

                    <Text
                        fontWeight="medium"
                        color="#909090"
                    >
                        Ao ajudar essa ação, você ganhará {eventData.points} pontos
                    </Text>
                </Box>

                <Box mb={5}>
                    <Text
                        fontWeight="bold"
                        fontSize="md"
                    >
                        Tipo
                    </Text>

                    <Text
                        fontWeight="medium"
                        color="#909090"
                    >
                        {eventData.type}
                    </Text>
                </Box>

                <Box mb={5}>
                    <Text
                        fontWeight="bold"
                        fontSize="md"
                    >
                        Razão
                    </Text>

                    <Text
                        fontWeight="medium"
                        color="#909090"
                    >
                        {eventData.reason}
                    </Text>
                </Box>

                <Box mb={5}>
                    <Text
                        fontWeight="bold"
                        fontSize="md"
                        mb={1}
                    >
                        Progresso do objetivo
                    </Text>

                    <Box width="90% ">
                        <Progress
                            rounded
                            value={STATUS_PROGRESS[eventData.status]}
                            _filledTrack={{
                                bg: STATUS_COLORS[eventData.status]
                            }}
                            size="xs"
                        />
                    </Box>
                </Box>

                <Box>
                    <Text
                        fontWeight="bold"
                        fontSize="md"
                    >
                        Descrição:
                    </Text>
                        <Text
                            fontWeight="medium"
                            color="#909090"
                        >
                            {/* A ONG local promoveu uma campanha de conscientização ambiental, reunindo voluntários para a limpeza de uma praia poluída, restaurando assim o ecossistema costeiro e educando a comunidade sobre a importância da preservação marinha */}
                            {eventData.description}
                        </Text>
                </Box>
                    </ScrollView>
            </VStack>

            <Box>
                <Button
                    marginTop={10}
                    height={50}
                    bgColor="success.500"
                    colorScheme="success"
                    borderRadius="full"
                    fontSize="lg"
                    size="lg"
                    onPress={() => navigation.navigate("Pagamento")}
                >
                    Doar
                </Button>
            </Box>
        </PageWithHeader>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
});
