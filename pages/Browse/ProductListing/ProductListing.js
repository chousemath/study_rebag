import * as React from 'react';
import { ActivityIndicator, StyleSheet, ScrollView, View } from 'react-native';
import { Button } from 'react-native-paper';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { useGetCategoriesQuery, useGetProductsQuery, useGetConditionsQuery, useGetDesignersQuery } from '../../../apis/apis';

export default function ProductListing({ navigation }) {
  // data, error, isLoading, isFetching, isSuccess
  const limitStepSize = 20;
  const limit = React.useRef(limitStepSize);
  const products = useGetProductsQuery(`?_page=0&_limit=${limit.current}`);
  const categories = useGetCategoriesQuery();
  const conditions = useGetConditionsQuery();
  const designers = useGetDesignersQuery();
  const [categoriesMap, setCategoriesMap] = React.useState({});
  const [conditionsMap, setConditionsMap] = React.useState({});
  const [designersMap, setDesignersMap] = React.useState({});
  const fetchMoreProducts = () => {
    limit.current += limitStepSize;
    products.refetch(`?_page=0&_limit=${limit.current}`);
  };
  React.useEffect(() => {
    if (categories.isSuccess) {
      const map = {};
      for (let category of categories.data) {
        map[category.id] = category.name;
      }
      setCategoriesMap(map);
    }
  }, [categories]);
  React.useEffect(() => {
    if (conditions.isSuccess) {
      const map = {};
      for (let condition of conditions.data) {
        map[condition.id] = condition.name;
      }
      setConditionsMap(map);
    }
  }, [conditions]);
  React.useEffect(() => {
    if (designers.isSuccess) {
      const map = {};
      for (let designer of designers.data) {
        map[designer.id] = designer.name;
      }
      setDesignersMap(map);
    }
  }, [designers]);
  return (
    <ScrollView>
      <View style={styles.container}>
        {(products.isSuccess || products.data) && products.data.map((product, i) => {
          return <ProductCard
            key={`product-card-${product.id}`}
            onPress={() => navigation.navigate('ProductDetails', {
              ...product,
              condition: conditionsMap[product.conditionId],
              designer: designersMap[product.designerId],
              category: categoriesMap[product.categoryId],
            })}
            category={categoriesMap[product.categoryId]}
            condition={conditionsMap[product.conditionId]}
            designer={designersMap[product.designerId]}
            {...product}
            id={i + 1} />
        })}
        <View style={styles.containerFetchMore}>
          {(products.isFetching || products.isLoading) &&
            <ActivityIndicator size="large" color="#00ff00" />
          }
          {products.isSuccess && !products.isFetching && !products.isLoading &&
            <Button mode="outlined" onPress={fetchMoreProducts}>
              Fetch more data
            </Button>
          }
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
    paddingTop: 16,
    paddingBottom: 16,
  },
});
