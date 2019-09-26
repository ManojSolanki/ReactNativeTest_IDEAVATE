import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from '../../res/Styles';

const ClickableLabel = ({
    text, onPress,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Text style={Styles.textStylePrimaryColor}> {text}
            </Text>
        </TouchableOpacity>
    );
};

export { ClickableLabel };
