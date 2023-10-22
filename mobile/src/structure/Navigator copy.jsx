
import { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Box } from 'native-base';

import Login from '../../src/views/login'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Icon } from 'native-base'

import Home from '../../src/views/home'
import Profile from '../../src/views/profile'
import New from '../../src/views/new'
import Settings from '../../src/views/settings'
import { Context } from '../context/context'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs2() {
    const screenOptions = ({ navigation }) => ({
        // headerShown: false,
        headerLeft: () => <Icon ml={5} size="lg" as={<MaterialIcons name="arrow-back" />} onPress={() => navigation.goBack()} />,
        tabBarShowLabel: false,

    })

    const insets = useSafeAreaInsets()

    return (
        // <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Navigator screenOptions={{
            headerShownLabel: false,
            headerTitleAlign: 'start',
            headerStyle: { backgroundColor: 'white', shadowOpacity: 0 },
            headerLeft: () => <Icon ml={5} size="md" as={<MaterialIcons name="arrow-back-ios" />} onPress={() => navigation.goBack()} />,
            headerTitleStyle: {
                fontWeight: '800',
            },
            tabBarShowLabel: false,
            // tabBarStyle: {
            //     position: 'absolute',
            //     bottom: insets.bottom,
            //     left: 20,
            //     right: 20,
            //     backgroundColor: '#4ade80',
            //     alignContent: 'center',
            //     alignItems: 'center',
            //     justifyContent: 'center',
            //     borderRadius: 40,
            //     paddingBottom: 0,
            //     height: 70,
            // },
            // headerTitle: () => <Box></Box>
        }}>
            <Tab.Screen
                name="Configurações"
                component={Settings}
                tabBarLabel="Configurações"
                options={{
                    tabBarIcon: ({ focused }) => <Icon
                        as={<MaterialIcons name="settings" />}
                        size="2xl"
                        color={focused ? "green.600" : "#c2c2c2"}
                        // color={focused ? "black" : "white"}
                    />,
                }}
            />

            <Tab.Screen
                name="Tela inicial"
                component={Home}
                tabBarLabel="Tela inicial"
                options={{
                    tabBarIcon: ({ focused }) => <Icon
                        as={<MaterialIcons name="home" />}
                        size="2xl"
                        color={focused ? "green.600" : "#c2c2c2"}
                        // color={focused ? "black" : "white"}
                    />
                }} />

            {/* <Tab.Screen
                name="Novo"
                component={New}
                tabBarLabel="Novo"
                options={{
                    tabBarIcon: ({ focused }) => <Icon
                        as={<MaterialIcons name="add-circle-outline" />}
                        size="2xl"
                        color={focused ? "green.600" : "#c2c2c2"}
                    />
                }} /> */}

            <Tab.Screen
                name="Meu Perfil"
                component={Profile}
                tabBarLabel="Meu Perfil"
                options={{
                    tabBarIcon: ({ focused }) => <Icon
                        // as={<MaterialIcons name="person-outline" />}
                        as={<MaterialIcons name="person" />}
                        size="2xl"
                        color={focused ? "green.600" : "#c2c2c2"}
                        // color={focused ? "black" : "white"}
                    />
                }} />
        </Tab.Navigator>
    );
}

export default function App() {
    const { isAuth } = useContext(Context)

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                {isAuth ?
                    <Stack.Screen name="Home2" component={HomeTabs2} />
                    : <Stack.Screen name="Login" component={Login} />}
            </Stack.Navigator>
        </NavigationContainer>
    );
}