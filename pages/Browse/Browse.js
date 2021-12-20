import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BrowseByCategory from './BrowseByCategory/BrowseByCategory';

const Stack = createNativeStackNavigator();

export default function Browse() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BrowseByCategory" component={BrowseByCategory} />
    </Stack.Navigator>
  );
}