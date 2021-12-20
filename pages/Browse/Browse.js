import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BrowseByCategory from './BrowseByCategory/BrowseByCategory';
import ProductListing from './ProductListing/ProductListing';

const Stack = createNativeStackNavigator();

export default function Browse() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="BrowseByCategory" component={BrowseByCategory} />
      <Stack.Screen name="ProductListing" component={ProductListing} />
    </Stack.Navigator>
  );
}