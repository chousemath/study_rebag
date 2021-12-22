import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from '../Home/Home';
import Browse from '../Browse/Browse';
import Sell from '../Sell/Sell';
import Favorites from '../Favorites/Favorites';
import Vault from '../Vault/Vault';

const Tab = createMaterialBottomTabNavigator();
const iconSize = 26;

export default function SignedIn() {
    return (
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
    );
}