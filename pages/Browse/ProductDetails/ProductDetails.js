import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Headline, Caption, Paragraph } from 'react-native-paper';
import { useGetProductQuery } from '../../../apis/apis';

export default function ProductDetails({ route }) {
    const productInfo = route.params;
    const product = useGetProductQuery(productInfo.id);
    return (
        <ScrollView>
            <Headline>{productInfo.name}</Headline>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
});
