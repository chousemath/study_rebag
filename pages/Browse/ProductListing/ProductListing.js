import * as React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import ProductCard from '../../../components/ProductCard/ProductCard';
import {useGetProductsQuery} from '../../../apis/productsApi';

export default function ProductListing() {
  // data, error, isLoading, isFetching, isSuccess
  const limitStepSize = 20;
  const limit = React.useRef(limitStepSize);
  const products = useGetProductsQuery(`?_page=0&_limit=${limit.current}`);
  const fetchMoreProducts = () => {
    limit.current += limitStepSize;
    products.refetch(`?_page=0&_limit=${limit.current}`);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {products.isSuccess && products.data.length && products.data.map((product, i) => {
          return <ProductCard key={`product-card-${product.id}`} {...product} id={i+1} />
        })}
        <View style={styles.containerFetchMore}>
          <TouchableOpacity style={styles.btnFetchMore} onPress={fetchMoreProducts}>
            <Text>Fetch more data</Text>
          </TouchableOpacity>
        </View>
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
  containerFetchMore: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnFetchMore: {
    padding: 8,
    margin: 16,
    backgroundColor: 'gray',
  },
});
