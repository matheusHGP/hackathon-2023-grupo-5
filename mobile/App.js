import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NativeBase from './src/structure/NativeBase';
import { ContextProvider } from './src/context/context'
import Navigator from './src/structure/Navigator';

export default function App() {
  return (
    <NativeBase>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <ContextProvider>
          <Navigator />
        </ContextProvider>
      </SafeAreaProvider>
    </NativeBase>
  );
}
