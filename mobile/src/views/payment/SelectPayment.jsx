import { StyleSheet, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, HStack, Text, VStack, Button, Icon, Center, Image, Pressable } from "native-base";
import PageWithHeader from '../../components/PageWithHeader'
import TransactionCard from '../../components/TransactionCard';
import OptionCard from '../../components/OptionCard';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const STATUS_COLORS = {
    1: 'red.500',
    2: 'yellow.300',
    3: 'orange.400',
    4: 'green.600',
}

const STATUS_PROGRESS = {
    1: 10,
    2: 30,
    3: 70,
    4: 90,
}

export default function Home({ navigation }) {
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
                    Selecione a forma de pagamento para realizar a doação
                </Text>
            </Box>

            <VStack>
                <Box
                    alignContent="center"
                    justifyContent="center"
                    alignItems="center"
                    mb={10}
                >
                    <Image
                        alt="payment"
                        source={require('../../../assets/payment.png')}
                        style={{ width: 300, height: 300 }}
                    />
                </Box>

                <HStack justifyContent="space-around" alignContent="center">
                    <VStack>
                        <Box
                            borderColor="gray.200"
                            borderWidth={1}
                            alignItems="center"
                            justifyContent="center"
                            width={150}
                            borderRadius={10}
                            height={40}
                        >
                            <Pressable onPress={() => navigation.navigate("Pagamento pix")}>
                                <Image
                                    alt="pix_payment"
                                    source={require('../../../assets/pix_payment.png')}
                                    style={{ width: 100, height: 100 }}
                                />
                            </Pressable>
                        </Box>
                        <Center>
                            <Text
                                fontWeight="medium"
                                color="#909090"
                            >
                                Código pix
                            </Text>
                        </Center>
                    </VStack>

                    <VStack>
                        <Box
                            borderColor="gray.200"
                            borderWidth={1}
                            alignItems="center"
                            justifyContent="center"
                            width={150}
                            borderRadius={10}
                            height={40}
                        >
                            <Pressable onPress={() => navigation.navigate("Pagamento cartão de crédito")}>
                                <Image
                                    alt="credit_card_payment"
                                    source={require('../../../assets/credit_card_payment.png')}
                                    style={{ width: 150, height: 150 }}
                                />
                            </Pressable>
                        </Box>
                        <Center>
                            <Text
                                fontWeight="medium"
                                color="#909090"
                            >
                                Cartão de crédito
                            </Text>
                        </Center>
                    </VStack>
                </HStack>
            </VStack>
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
