import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function TrendingSearch({ search }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable}>
                <Text style={styles.text}>{search}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 24,
    },
    touchable: {
        marginLeft: 16,
    },
    text: {
        fontSize: 12,
    },
});
