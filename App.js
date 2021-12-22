import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import favoritesReducer from './reducers/favorites';
import SignedIn from './pages/SignedIn/SignedIn';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

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