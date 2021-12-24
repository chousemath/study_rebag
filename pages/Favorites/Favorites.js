import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../reducers/favorites';

export default function Favorites() {
  const products = useSelector(state => state.favorites.value.products);
  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map((product) => {
          return <ProductCard key={`product-card-${product.id}`} {...product} id={product.id} />
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
