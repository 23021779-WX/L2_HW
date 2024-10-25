import { View, Text, Image} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boats = ({ header, title, description, icon_name, poster }) => {
    return (
        <View>
            <Text>
                {header}
            </Text>
            <Text>
                <Icon name= {icon_name} size={30} color="#B23B23"/>
                {title}
            </Text>
            <Text>
                {description}
            </Text>
            <Image source={poster} style={{width:500, height:300}}/>
        </View>
    );
};

export default Boats;
