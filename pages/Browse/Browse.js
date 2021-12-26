import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BrowseByCategory from './BrowseByCategory/BrowseByCategory';
import ProductListing from './ProductListing/ProductListing';
import ProductDetails from './ProductDetails/ProductDetails';
import Header from '../../components/Header/Header';

const Stack = createNativeStackNavigator();

export default function Browse() {
  return (
    <Stack.Navigator
      initialRouteName="BrowseByCategory"
      headerMode="screen"
      screenOptions={{
        header: (props) => (
          <Header {...props} />
        ),
      }}
    >
      <Stack.Screen
        name="BrowseByCategory"
        component={BrowseByCategory}
        options={{
          title: 'Browse By Category'
        }}
      />
      <Stack.Screen
        name="ProductListing"
        component={ProductListing}
        options={{
          title: 'Product Listing'
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          title: 'Product Details'
        }}
      />
    </Stack.Navigator>
  );
}