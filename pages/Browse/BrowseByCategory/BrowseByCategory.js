import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import CategoryButton from './components/CategoryButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import TrendingSearch from './components/TrendingSearch';

export default function BrowseByCategory({ navigation }) {
  const trendingSearches = [
    { search: 'Chanel' },
    { search: 'Louis Vuitton' },
    { search: 'Gucci' },
  ];
  const categories = [
    { name: 'New Arrivals', category: 'new_arrivals' },
    { name: 'Designers', category: 'designers' },
    { name: 'All Bags', category: 'all_bags' },
    { name: 'Accessories', category: 'accessories' },
    { name: 'Watches', category: 'watches' },
    { name: 'Jewelry', category: 'jewelry' },
    { name: 'Outlet', category: 'outlet' },
    { name: 'For Her', category: 'for_her' },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.spacer}/>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>TRENDING SEARCHES</Text>
          </View>
          <View style={styles.trendingSearchesContainer}>
            {trendingSearches.map(search => <TrendingSearch
              key={`trending-search-${search.search}`}
              {...search}
              />)}
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>BROWSE BY CATEGORY</Text>
          </View>
          <View style={styles.categoriesContainer}>
            {categories.map(category => <CategoryButton
              key={`category-button-${category.name}-${category.category}`}
              name={category.name}
              navigate={() => navigation.navigate('ProductListing', {
                category: category.category
              })}
              />)}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  trendingSearchesContainer: {
    marginTop: 8,
    marginBottom: 16,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  categoriesContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  labelContainer: {
    display: 'flex',
    marginLeft: 16,
  },
  labelText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  spacer: {
    width: '100%',
    height: 32,
  },
});
