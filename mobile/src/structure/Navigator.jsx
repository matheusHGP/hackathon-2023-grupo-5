
import { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import Login from '../../src/views/login'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Icon } from 'native-base'

import Home from '../../src/views/home'
import Profile from '../../src/views/profile'
import Settings from '../../src/views/settings'
import OngDetail from '../../src/views/ongDetail'
import SelectPayment from '../../src/views/payment/SelectPayment'
import CreditCard from '../../src/views/payment/CreditCard'
import Pix from '../../src/views/payment/Pix'
import Ranking from '../../src/views/ranking'
import Welcome from '../../src/views/welcome'
import Register from '../../src/views/register'

import { Context } from '../context/context'
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs2() {
    const insets = useSafeAreaInsets()

    return (
        <Tab.Navigator screenOptions={{
            headerShownLabel: false,
            // headerTitleAlign: 'start',
            headerStyle: { backgroundColor: 'white', shadowOpacity: 0 },
            // headerLeft: () => <Icon ml={5} size="md" as={<MaterialIcons name="arrow-back-ios" />} onPress={() => navigation.goBack()} />,
            headerTitleStyle: {
                fontWeight: '800',
            },
            tabBarShowLabel: false,
            // tabBarStyle: {
            //     position: 'absolute',
            //     // bottom: insets.bottom,
            //     marginBottom: insets.bottom,
            //     left: 20,
            //     right: 20,
            //     backgroundColor: 'green',
            //     alignContent: 'center',
            //     alignItems: 'center',
            //     justifyContent: 'center',
            //     borderRadius: 10,
            //     paddingBottom: 0,
            //     // height: 70,
            //     // flex: .2
            // }
        }}>
            <Tab.Screen
                name="Tela inicial"
                component={Home}
                tabBarLabel="Tela inicial"
                options={{
                    tabBarIcon: ({ focused }) => <Icon
                        as={<MaterialIcons name="home" />}
                        size="2xl"
                        color={focused ? "success.500" : "#c2c2c2"}
                    />
                }}
            />

            <Tab.Screen
                name="Ranking de usuários"
                component={Ranking}
                tabBarLabel="Ranking de usuários"
                options={{
                    tabBarIcon: ({ focused }) => <Icon
                        as={<MaterialIcons name="emoji-events" />}
                        size="2xl"
                        color={focused ? "success.500" : "#c2c2c2"}
                    />
                }}
            />

            <Tab.Screen
                name="Meu Perfil"
                component={Profile}
                tabBarLabel="Meu Perfil"
                options={{
                    tabBarIcon: ({ focused }) => <Icon
                        as={<MaterialIcons name="person" />}
                        size="2xl"
                        color={focused ? "success.500" : "#c2c2c2"}
                    />
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    const { isAuth } = useContext(Context)

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isAuth ?
                    <>
                        <Stack.Screen name="Home2" component={HomeTabs2} />
                        <Stack.Screen
                            name="Detalhe da Ação"
                            component={OngDetail}
                            options={({ navigation }) => ({
                                headerShown: true,
                                // headerBackTitleVisible: false,
                                headerLeft: () => <Icon size="md" as={<MaterialIcons name="arrow-back-ios" />}
                                    onPress={() => navigation.goBack()}
                                // onPress={() => console.log('navigation', navigation)}
                                />,
                                headerTitleStyle: { fontWeight: '800' },
                                headerShadowVisible: false,
                            })}
                        />
                        <Stack.Screen
                            name="Pagamento"
                            component={SelectPayment}
                            options={({ navigation }) => ({
                                headerShown: true,
                                // headerBackTitleVisible: false,
                                headerLeft: () => <Icon size="md" as={<MaterialIcons name="arrow-back-ios" />}
                                    onPress={() => navigation.goBack()} />,
                                headerTitleStyle: { fontWeight: '800' },
                                headerShadowVisible: false,
                            })}
                        />
                        <Stack.Screen
                            name="Pagamento pix"
                            component={Pix}
                            options={({ navigation }) => ({
                                headerShown: true,
                                // headerBackTitleVisible: false,
                                headerLeft: () => <Icon size="md" as={<MaterialIcons name="arrow-back-ios" />}
                                    onPress={() => navigation.goBack()} />,
                                headerTitleStyle: { fontWeight: '800' },
                                headerShadowVisible: false,
                            })}
                        />
                        <Stack.Screen
                            name="Pagamento cartão de crédito"
                            component={CreditCard}
                            options={({ navigation }) => ({
                                headerShown: true,
                                // headerBackTitleVisible: false,
                                headerLeft: () => <Icon size="md" as={<MaterialIcons name="arrow-back-ios" />}
                                    onPress={() => navigation.goBack()} />,
                                headerTitleStyle: { fontWeight: '800' },
                                headerShadowVisible: false,
                            })}
                        />
                    </>
                    : <>
                        <Stack.Screen name="Welcome" component={Welcome} />
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={({ navigation }) => ({
                                headerShown: true,
                                // headerBackTitleVisible: false,
                                headerLeft: () => <Icon size="md" as={<MaterialIcons name="arrow-back-ios" />}
                                    onPress={() => navigation.goBack()} />,
                                headerTitleStyle: { fontWeight: '800' },
                                headerShadowVisible: false,
                            })}
                        />
                        <Stack.Screen
                            name="Register"
                            component={Register}
                            options={({ navigation }) => ({
                                headerShown: true,
                                // headerBackTitleVisible: false,
                                headerLeft: () => <Icon size="md" as={<MaterialIcons name="arrow-back-ios" />}
                                    onPress={() => navigation.goBack()} />,
                                headerTitleStyle: { fontWeight: '800' },
                                headerShadowVisible: false,
                            })}
                        />
                        {/* <Stack.Screen name="Login" component={Login} /> */}
                    </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}