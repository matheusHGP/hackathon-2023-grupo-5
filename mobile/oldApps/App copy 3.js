import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets  } from 'react-native-safe-area-context';
import { Button, NativeBaseProvider, Box, extendTheme } from "native-base";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import {  } from '@fortawesome/free-regular-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import View1 from '../View1'

const Tab = createBottomTabNavigator();

export default function App() {
  // const insets = useSafeAreaInsets();
  const theme = extendTheme({
    colors: {
      ola: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      }
    },
  });


  return (
    <NativeBaseProvider isSSR={false} theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: {
                position: 'absolute',
                bottom: 20,
                left: 20,
                right: 20,
                backgroundColor: 'green',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                paddingBottom: 0,
                height: 70,
              },
              tabBarIconStyle: {
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                backgroundColor: 'white',
                flex: 1,
                paddingBottom: 0
              }
            }}>
            <Tab.Screen
              name="settings"
              component={View1}
              tabBarLabel="olaa"
              options={{ tabBarIcon: ({focused}) => <FontAwesomeIcon color="white" icon={faGear} size={27} /> }}
            />
            <Tab.Screen
              name="add"
              component={View1}
              tabBarLabel="olaa"
              options={{ tabBarIcon: () => <FontAwesomeIcon color="white" icon={faCirclePlus} size={27} /> }}
            />
            <Tab.Screen
              name="profile"
              component={View1}
              tabBarLabel="olaa"
              options={{ tabBarIcon: () => <FontAwesomeIcon color="white" icon={faUser} size={27} /> }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
