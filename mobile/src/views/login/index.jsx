import { useState, useContext } from 'react';
import {
    VStack,
    Box,
    FormControl,
    Heading,
    Button,
    Text,
    HStack,
    Icon,
    Input,
} from 'native-base'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import {
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    Image
} from 'react-native';

import Page from '../../components/Page'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear'
// import { Error } from '../../common/components/error/styles'

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// import { ControlledInput } from '../../components/controlledInput'
import { ControlledInput } from '../../components/ControlledInput'
// import Page from '../../common/components/page/Page'
import * as AuthService from '../../services/auth/authService'
import { getItem, saveItem } from '../../utils/storage'
import { Context } from '../../context/context'
// import { MaterialIcons } from '@expo/vector-icons'
import Error from '../../components/Error'

const schema = yup.object({
    email: yup.string().trim().email("E-mail inválido").required("Informe o seu email"),
    password: yup.string().required("Informe a senha"),
});

const Login = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const [actionError, setActionError] = useState('')
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const { setIsAuth } = useContext(Context)

    const login = async (data) => {
        setActionError('')
        setLoading(true)
        const resp = await AuthService.login(data)
        setLoading(false)

        if (!resp.success) {
            setActionError(resp.message)
            return
        }

        saveItem('TOKEN', resp.data.token)
        setIsAuth(true)
    }

    const handleFormSubmit = (data) => {
        login(data)
    }

    const handleMockLogin = () => {
        setIsAuth(true)
    }

    return (
        <Page>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                    delayPressIn={false}
                    pressRetentionOffset={false}>
                    <Box
                        justifyContent="center"
                        textAlign="center"
                        width="full"
                        height="full"
                    >
                        <ScrollView>
                            {/* <HStack padding={5} alignItems="center" justifyContent={"center"}>
                                <Box>
                                    <Text
                                        fontSize={30}
                                        color="gray.500"
                                        fontWeight={"bold"}
                                    >
                                        Login
                                    </Text>
                                </Box>
                            </HStack> */}

                            <Box alignContent="center" justifyContent="center" alignItems="center">
                                <Image source={require('../../../assets/planting.png')} style={{ width: 300, height: 300 }} />
                            </Box>

                            {/* <ScrollView> */}
                            <VStack width="full" padding={5} space={2} justifyContent="center">
                                <FormControl isRequired>
                                    <FormControl.Label>
                                        <Text fontSize={'md'}>Email</Text>
                                    </FormControl.Label>
                                    <ControlledInput
                                        control={control}
                                        name="email"
                                        placeholder="Digite seu e-mail"
                                        autoCapitalize="none"
                                        size="lg"
                                        borderRadius="full"
                                        height="12"
                                        InputLeftElement={<Icon
                                            as={<MaterialIcons name='person-outline' />}
                                            ml={3}
                                            size="lg"
                                        />}
                                        error={errors.email}
                                    />
                                </FormControl>

                                <FormControl isRequired>
                                    <FormControl.Label>
                                        <Text fontSize={'md'}>Senha</Text>
                                    </FormControl.Label>
                                    <ControlledInput
                                        control={control}
                                        type="password"
                                        name="password"
                                        placeholder="Digite sua senha"
                                        autoCapitalize="none"
                                        size="lg"
                                        borderRadius="full"
                                        height="12"
                                        InputLeftElement={<Icon
                                            as={<MaterialIcons name='lock-outline' />}
                                            ml={3}
                                            size="lg"
                                        />}
                                        InputRightElement={<Icon
                                            as={<MaterialIcons name='visibility' />}
                                            mr={5}
                                            size="lg"
                                        />}
                                        error={errors.password}
                                    />
                                </FormControl>

                                <Error>{actionError}</Error>
                                <Button
                                    isLoading={loading}
                                    // marginTop={10}
                                    height={50}
                                    // colorScheme="green"
                                    colorScheme="success"
                                    borderRadius="full"
                                    fontSize="lg"
                                    size="lg"
                                    // onPress={() => handleMockLogin()}
                                    onPress={handleSubmit(handleFormSubmit)}
                                >
                                    Entrar
                                </Button>
                            </VStack>
                        </ScrollView>
                    </Box>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Page>
    );
}

export default Login