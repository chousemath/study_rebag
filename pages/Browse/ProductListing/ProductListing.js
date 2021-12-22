import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import ProductCard from '../../../components/ProductCard';

export default function ProductListing() {
  const products = [];
  for (let i = 0; i < 100; i++) {
    products.push({
      name: 'Product 001',
      retailPrice: 300000,
      salesPrice: 250000,
    });
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map((product, i) => {
          return <ProductCard key={`product-card-${i}`} {...product} />
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
