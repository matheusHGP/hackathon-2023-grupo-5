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
    Center
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
import PageWithHeader from '../../components/PageWithHeader'
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

const Register = ({ navigation }) => {
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
        <PageWithHeader>
            <Box
                justifyContent="center"
                textAlign="center"
                width="full"
                height="full"
            >
                <HStack padding={5} alignItems="center" justifyContent={"center"}>
                    <Box>
                        <Text
                            fontSize={30}
                            color="gray.500"
                            fontWeight={"bold"}
                        >
                            Seja bem vindo
                        </Text>
                    </Box>
                </HStack>

                <Box alignContent="center" justifyContent="center" alignItems="center">
                    <Image source={require('../../../assets/planting.png')} style={{ width: 300, height: 300 }} />
                </Box>

                <Box>
                    <Center>
                        <Text
                            // fontSize={30}
                            color="gray.500"
                            fontWeight={"600"}
                        >
                            O que você deseja fazer?
                        </Text>
                    </Center>
                </Box>
                <Box>
                    <Button
                        isLoading={loading}
                        marginTop={5}
                        height={50}
                        // colorScheme="green"
                        colorScheme="success"
                        borderRadius="full"
                        fontSize="lg"
                        size="lg"
                        onPress={() => navigation.navigate('Login')}
                    >
                        Entrar
                    </Button>
                </Box>
                <Box mt={4}>
                    <Button
                        isLoading={loading}
                        height={50}
                        bgColor="success.400"
                        borderRadius="full"
                        fontSize="lg"
                        size="lg"
                        onPress={() => navigation.navigate('Register')}
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </PageWithHeader>
    );
}

export default Register