import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function CategoryButton({ name, navigate }) {
    return (
        <View style={styles.outerContainer}>
            <TouchableOpacity style={styles.container} onPress={navigate}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{name}</Text>
                </View>
                <View style={styles.spacer}/>
                <View style={styles.iconContainer}>
                    <AntDesign name="right" color={'gray'} size={24} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
    },
    container: {
        width: '100%',
        display: 'flex',
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 16,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        height: 60,
    },
    text: {
        fontSize: 32,
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    spacer: {
        flexGrow: 1,
    },
});
