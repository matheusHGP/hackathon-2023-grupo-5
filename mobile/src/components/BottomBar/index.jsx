import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../views/home'
import New from '../../views/new'
import Settings from '../../views/settings'

const Tab = createBottomTabNavigator();

export default function BottomBar() {
    const insets = useSafeAreaInsets()

    const tabBarIconStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
        flex: 1,
        paddingBottom: 0
    }

    const tabBarStyle = {
        position: 'absolute',
        bottom: insets.bottom,
        left: 20,
        right: 20,
        backgroundColor: 'green',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingBottom: 0,
        height: 70,
    }

    const screenOptions = {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle,
        tabBarIconStyle
    }

    return <Tab.Navigator
        screenOptions={screenOptions}>
        <Tab.Screen
            name="settings"
            component={Settings}
            tabBarLabel="Settings"
            options={{ tabBarIcon: ({ focused }) => <FontAwesomeIcon color="white" icon={faGear} size={27} /> }}
        />
        <Tab.Screen
            name="new"
            component={New}
            tabBarLabel="New"
            options={{ tabBarIcon: () => <FontAwesomeIcon color="white" icon={faCirclePlus} size={27} /> }}
        />
        <Tab.Screen
            name="home"
            component={Home}
            tabBarLabel="Home"
            options={{ tabBarIcon: () => <FontAwesomeIcon color="white" icon={faUser} size={27} /> }}
        />
    </Tab.Navigator>
}