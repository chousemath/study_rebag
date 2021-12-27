import * as React from 'react';
import { Image, Dimensions, StyleSheet, ScrollView, View, } from 'react-native';
import { Headline, Caption, Paragraph } from 'react-native-paper';
import { useGetProductQuery } from '../../../apis/apis';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const windowWidth = Dimensions.get('window').width;
const detailImageWidth = (windowWidth - 32) / 4;

export default function ProductDetails({ route }) {
    const productInfo = route.params;
    const product = useGetProductQuery(productInfo.id);
    const renderDetailImage = ({ item: uri }) => {
        return (
            <Image
                style={{
                    width: detailImageWidth,
                    height: detailImageWidth,
                }}
                source={{ uri }}
            />
        );
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                <Headline>{productInfo.designer}</Headline>
                <Paragraph>{productInfo.name}</Paragraph>
                <View style={styles.containerPriceShare}>
                    <View style={styles.containerPrice}>
                        <Paragraph>₩{productInfo.salesPrice} KRW</Paragraph>
                    </View>
                    <View style={styles.spacer} />
                    <View style={styles.containerShare}>
                        <EvilIcons name="share-apple" color={'black'} size={24} />
                    </View>
                </View>
            </View>
            <Image
                style={{
                    marginLeft: 16,
                    width: (windowWidth - 32),
                    height: (windowWidth - 32),
                }}
                source={{
                    uri: productInfo.profileImage,
                }}
            />
            <View style={styles.container}>
                <View style={styles.containerPriceOnly}>
                    <Headline>₩{productInfo.salesPrice} KRW</Headline>
                </View>
                <View style={styles.containerPriceOnly}>
                    <Caption>Est Retail ₩{productInfo.retailPrice}</Caption>
                </View>
                <View style={styles.containerPriceOnly}>
                    <Paragraph>CONDITION: {productInfo.condition}</Paragraph>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    spacer: {
        display: 'flex',
        flexGrow: 1,
    },
    containerPriceShare: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    containerPriceOnly: {
        width: '100%',
    },
    containerPrice: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerShare: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        padding: 16,
    }
});
