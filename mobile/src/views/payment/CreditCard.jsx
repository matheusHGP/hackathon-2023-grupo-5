import {
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import {
    Box,
    Text,
    VStack,
    Button,
    Image,
    FormControl,
    Input,
} from "native-base";
import PageWithHeader from '../../components/PageWithHeader'


export default function CreditCard({ navigation }) {
    return (
        <PageWithHeader>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                    delayPressIn={false}
                    pressRetentionOffset={false}>
                    <Box height="full">
                        <ScrollView>
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

                            <Box
                                alignContent="center"
                                justifyContent="center"
                                alignItems="center"
                                mb={0}
                            >
                                <Image
                                    alt="payment"
                                    source={require('../../../assets/credit_card_payment3.png')}
                                    style={{ width: 200, height: 200 }}
                                />
                            </Box>
                            <VStack justifyContent="space-between">
                                <FormControl isRequired mt={5}>
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

                                <FormControl isRequired mt={5}>
                                    <FormControl.Label>
                                        <Text fontSize={'md'}>Número do cartão de crédito</Text>
                                    </FormControl.Label>
                                    <Input
                                        // control={control}
                                        name="email"
                                        placeholder="Digite o número do cartão"
                                        autoCapitalize="none"
                                        size="lg"
                                        borderRadius="full"
                                        height="12"
                                    // error={errors.password}
                                    />
                                </FormControl>

                                <FormControl isRequired mt={5}>
                                    <FormControl.Label>
                                        <Text fontSize={'md'}>Data de validade</Text>
                                    </FormControl.Label>
                                    <Input
                                        // control={control}
                                        name="email"
                                        placeholder="Digite a data de validade"
                                        autoCapitalize="none"
                                        size="lg"
                                        borderRadius="full"
                                        height="12"
                                    // error={errors.password}
                                    />
                                </FormControl>

                                <FormControl isRequired mt={5}>
                                    <FormControl.Label>
                                        <Text fontSize={'md'}>CVV</Text>
                                    </FormControl.Label>
                                    <Input
                                        // control={control}
                                        name="email"
                                        placeholder="Digite o código de segurança"
                                        autoCapitalize="none"
                                        size="lg"
                                        borderRadius="full"
                                        height="12"
                                    // error={errors.password}
                                    />
                                </FormControl>

                                <FormControl isRequired mt={5}>
                                    <FormControl.Label>
                                        <Text fontSize={'md'}>Valor</Text>
                                    </FormControl.Label>
                                    <Input
                                        // control={control}
                                        name="value"
                                        placeholder="Digite o valor que deseja doar"
                                        autoCapitalize="none"
                                        size="lg"
                                        borderRadius="full"
                                        height="12"
                                    // error={errors.password}
                                    />
                                </FormControl>
                            </VStack>
                        </ScrollView>
                        <Button
                            marginTop={10}
                            height={50}
                            bgColor="success.500"
                            borderRadius="full"
                            fontSize="lg"
                            size="lg"
                            onPress={() => { }}
                        >
                            Confirmar pagamento
                        </Button>
                    </Box>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </PageWithHeader>
    );
}