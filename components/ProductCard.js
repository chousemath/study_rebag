import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function ProductCard({ name, salesPrice, retailPrice }) {
    return (
        <View style={styles.container}>
            <Card>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Content>
                    <Title>{name}</Title>
                    <Paragraph>{salesPrice}</Paragraph>
                    <Paragraph>{retailPrice}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
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
  },
});
