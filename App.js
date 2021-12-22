import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import SignedIn from './pages/SignedIn/SignedIn';
import { store } from './stores/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <SignedIn/>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}