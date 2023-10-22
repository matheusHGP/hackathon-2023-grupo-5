import { useContext } from 'react'
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Button, Avatar, HStack, Text, VStack, Icon } from "native-base";
import { Context } from '../../context/context';
import PageWithHeader from '../../components/PageWithHeader'
import MenuItem from '../../components/MenuItem'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function Profile() {
    const { setIsAuth } = useContext(Context)

    return (
        <PageWithHeader>
            <HStack
                mt={5}
                borderBottomWidth={1}
                borderBottomColor="gray.200"
                alignContent="center"
                align="center"
            >
                <Box mr={5} mb={5}>
                    <Avatar
                        size={"xl"}
                        bg="green.500"
                        source={{
                            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        }}
                    >
                        AJ
                    </Avatar>
                </Box>
                <Box>
                    <Text fontSize={"lg"} fontWeight={"bold"}>Martha</Text>
                    <Text fontSize={"sm"} fontWeight={"bold"} color="gray.400">martha@gmail.com</Text>
                    <Button
                        bgColor="success.400"
                        size="xs"
                        _text={{ fontSize: "sm", fontWeight: "bold" }}
                        mt={3}
                        borderRadius="full"
                        padding={1}
                    >
                        Editar perfil
                    </Button>
                </Box>
            </HStack>
            <VStack mt={5} padding={3}>
                <MenuItem name="Favoritos" icon="favorite-outline" />
                <MenuItem name="Idioma" icon="public" />
                <MenuItem name="Localização" icon="location-on" />
                <MenuItem name="Doações realizadas" icon="attach-money" />
                <MenuItem name="Quantidade de pontos" icon="score" />
            </VStack>

            <VStack mt={5} padding={3}>
                <MenuItem
                    name="Sair"
                    icon="logout"
                    color="error.400"
                    hasArrowIcon={false}
                    onPress={() => setIsAuth(false)}
                />
            </VStack>
        </PageWithHeader>
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
