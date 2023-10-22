import {
    StyleSheet,
    FlatList,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Box,
    Text,
    VStack,
    Button,
    Icon,
    Progress,
    Image,
    Pressable,
    Center,
    FormControl,
    Input
} from "native-base";
import PageWithHeader from '../../components/PageWithHeader'


export default function Home({ navigation }) {
    const handleCardClick = (id) => {
        navigation.navigate("Detalhe da Ong")
    }

    return (
        <PageWithHeader>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                    delayPressIn={false}
                    pressRetentionOffset={false}
                >
                    <ScrollView>
                        <Box>
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
                                    mb={0}
                                >
                                    <Image
                                        alt="payment"
                                        source={require('../../../assets/pix_payment.png')}
                                        style={{ width: 200, height: 200 }}
                                    />
                                </Box>

                                <Box mb={10}>
                                    <VStack justifyContent="space-between">
                                        <FormControl isRequired>
                                            <FormControl.Label>
                                                <Text fontSize={'md'}>Nome completo</Text>
                                            </FormControl.Label>
                                            <Input
                                                // control={control}
                                                name="email"
                                                placeholder="Digite seu nome igual do cartão"
                                                autoCapitalize="none"
                                                size="lg"
                                                borderRadius="full"
                                                height="12"
                                            // error={errors.password}
                                            />
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormControl.Label>
                                                <Text fontSize={'md'}>Número do cartão de crédito</Text>
                                            </FormControl.Label>
                                            <Input
                                                // control={control}
                                                name="email"
                                                placeholder="Digite seu nome igual do cartão"
                                                autoCapitalize="none"
                                                size="lg"
                                                borderRadius="full"
                                                height="12"
                                            // error={errors.password}
                                            />
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormControl.Label>
                                                <Text fontSize={'md'}>Nome completo</Text>
                                            </FormControl.Label>
                                            <Input
                                                // control={control}
                                                name="email"
                                                placeholder="Digite seu nome igual do cartão"
                                                autoCapitalize="none"
                                                size="lg"
                                                borderRadius="full"
                                                height="12"
                                            // error={errors.password}
                                            />
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormControl.Label>
                                                <Text fontSize={'md'}>Nome completo</Text>
                                            </FormControl.Label>
                                            <Input
                                                // control={control}
                                                name="email"
                                                placeholder="Digite seu nome igual do cartão"
                                                autoCapitalize="none"
                                                size="lg"
                                                borderRadius="full"
                                                height="12"
                                            // error={errors.password}
                                            />
                                        </FormControl>
                                    </VStack>
                                </Box>

                                <Box>
                                    <Button
                                        colorScheme="success"
                                        fontSize="lg"
                                        size="lg"
                                        borderRadius="full"
                                    >
                                        Confirmar pagamento
                                    </Button>
                                </Box>
                            </VStack>
                        </Box>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
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
