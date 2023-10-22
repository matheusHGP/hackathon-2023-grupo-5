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
    name: yup.string().trim().required("Informe o seu nome"),
    email: yup.string().trim().email("E-mail inválido").required("Informe o seu email"),
    password: yup.string().required("Informe a senha"),
});

const Register = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const [actionError, setActionError] = useState('')
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const { setIsAuth } = useContext(Context)

    const register = async (data) => {
        setActionError('')
        setLoading(true)
        const resp = await AuthService.register(data)
        setLoading(false)

        if (!resp.success) {
            setActionError(resp.message)
            return
        }

        navigation.navigate('Login')
    }

    const handleFormSubmit = (data) => {
        register(data)
        // console.log(data)
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
                    <ScrollView
                        justifyContent="center"
                        textAlign="center"
                    >
                        {/* <HStack padding={5} alignItems="center" justifyContent={"center"}>
                                <Box>
                                    <Text
                                        fontSize={30}
                                        color="gray.500"
                                        fontWeight={"bold"}
                                    >
                                        Cadastrar
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
                                    <Text fontSize={'md'}>Nome</Text>
                                </FormControl.Label>
                                <ControlledInput
                                    control={control}
                                    name="name"
                                    placeholder="Nome"
                                    autoCapitalize="none"
                                    size="lg"
                                    borderRadius="full"
                                    height="12"
                                    InputLeftElement={<Icon
                                        as={<MaterialIcons name='person-outline' />}
                                        ml={3}
                                        size="lg"
                                    />}
                                    error={errors.name}
                                />
                            </FormControl>

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
                                        as={<MaterialIcons name='mail-outline' />}
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
                                // marginTop={0}
                                height={50}
                                // colorScheme="green"
                                colorScheme="success"
                                borderRadius="full"
                                fontSize="lg"
                                size="lg"
                                onPress={handleSubmit(handleFormSubmit)}
                            >
                                Cadastrar
                            </Button>
                        </VStack>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Page>
    );
}

export default Register