import { TouchableOpacity } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header(props) {
    console.log(props);
    const title = props.options.title;
    const handleSearch = () => console.log('Searching');
    const handleMore = () => console.log('Shown more');
    return (
        < Appbar.Header style={{
            backgroundColor: 'white'
        }}>
            {props.back ? (
                <Appbar.BackAction onPress={() => props.navigation.goBack()} />
            ) : (
                <TouchableOpacity>
                    <Avatar.Image
                        size={40}
                        source={{
                            uri:
                                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                        }}
                    />
                </TouchableOpacity>
            )}
            <Appbar.Content title={title} />
            <Appbar.Action icon="magnify" onPress={handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={handleMore} />
        </Appbar.Header>
    );
};