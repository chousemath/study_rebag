import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Home from './pages/Home/Home';
import Browse from './pages/Browse/Browse';
import Sell from './pages/Sell/Sell';
import Favorites from './pages/Favorites/Favorites';
import Vault from './pages/Vault/Vault';
import favoritesReducer from './reducers/favorites';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

const Tab = createMaterialBottomTabNavigator();
const iconSize = 26;

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            barStyle={{
              backgroundColor: 'white',
              borderTop: '1px solid gray',
            }}
          >
            <Tab.Screen name="Home" component={Home}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={iconSize} />
                ),
              }}
            />
            <Tab.Screen name="Browse" component={Browse}
              options={{
                tabBarLabel: 'Browse',
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="search" color={color} size={iconSize} />
                ),
              }}
            />
            <Tab.Screen name="Sell" component={Sell}
              options={{
                tabBarLabel: 'Sell',
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="money" color={color} size={iconSize} />
                ),
              }}
            />
            <Tab.Screen name="Favorites" component={Favorites}
              options={{
                tabBarLabel: 'Favorites',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="heart" color={color} size={iconSize} />
                ),
              }}
            />
            <Tab.Screen name="The Vault" component={Vault}
              options={{
                tabBarLabel: 'The Vault',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="movie" color={color} size={iconSize} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}