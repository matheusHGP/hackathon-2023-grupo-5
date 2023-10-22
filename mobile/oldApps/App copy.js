import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button, NativeBaseProvider, Box, extendTheme } from "native-base";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import {  } from '@fortawesome/free-regular-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import View1 from '../View1'

const Tab = createBottomTabNavigator();

export default function App() {
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
        <SafeAreaView left={10} right={10} style={styles.container}>
          <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
              <Tab.Screen name="Home" component={View1} />
              {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
            </Tab.Navigator>
          </NavigationContainer>
          {/* <Box>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
            <Button colorScheme={"ola"}>ola</Button>
            <FontAwesomeIcon icon={faGear} />
          </Box> */}
        </SafeAreaView>
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
