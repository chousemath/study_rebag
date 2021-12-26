import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../reducers/favorites';

export default function ProductCard(props) {
    const favorites = useSelector(state => state.favorites.value.ids);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Card style={{ width: '100%' }}>
                <Card.Cover source={{ uri: props.profileImage }} />
                <Card.Content>
                    <Title>{props.brand}</Title>
                    <Paragraph numberOfLines={1}>{props.name}</Paragraph>
                    <Paragraph>₩{props.salesPrice}</Paragraph>
                    <Paragraph>즉시 구매가</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button
                        onPress={() => {
                            if (favorites[props.id]) {
                                dispatch(removeFavorite(props))
                            } else {
                                dispatch(addFavorite(props))
                            }
                        }}
                        icon="heart"
                        mode="text"
                        color={favorites[props.id] ? 'gold' : 'gray'} />
                </Card.Actions>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        marginTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
    },
});
