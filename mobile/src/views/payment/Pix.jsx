import { StyleSheet, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, HStack, Text, VStack, Button, Icon, Progress, Image, Pressable, Center } from "native-base";
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
                    Leia o código QR ou copie o código pix para concluir a doação
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
                        source={require('../../../assets/pix_payment.png')}
                        style={{ width: 250, height: 250 }}
                    />
                </Box>

                <Box mb={10}>
                    <Center>
                        <Text
                            fontWeight="bold"
                            color="gray.400"
                            fontSize="lg"
                        >
                            Realizar doação
                        </Text>

                        <Image
                            alt="payment"
                            source={require('../../../assets/qrcode_pix.jpeg')}
                            style={{ width: 150, height: 150 }}
                        />
                    </Center>
                </Box>

                <Box>
                    <Center>
                        <Box alignItems="center">
                            <Text
                                fontWeight="medium"
                                color="#909090"
                            >
                                154564848981515648115151516515
                            </Text>
                        </Box>
                    </Center>

                    <Button
                        bgColor="success.500"
                        fontSize="lg"
                        size="lg"
                        borderRadius="full"
                    >
                        Copiar código pix
                    </Button>
                </Box>
            </VStack>
        </PageWithHeader >
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
