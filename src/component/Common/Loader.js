import React from 'react';
import { View, Text, Image } from "react-native";
import Images from '../../res/Images';
import Styles from '../../res/Styles';
import Strings from '../../res/Strings';

export default class Loader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state = {
            deg: 0,
            interval: {},
            statusWork: false
        }
        this.startLoader = this.startLoader.bind(this);
        this.stopLoader = this.stopLoader.bind(this);
    }

    startLoader() {
        const interval = setInterval(() => {
            this.setState({ deg: this.state.deg + 45 });
        }, 100);

        this.setState({ interval: interval, statusWork: true });
    }

    stopLoader(interval) {
        clearInterval(interval)
        this.setState({ statusWork: false });
    }


    render() {
        const { textColor, loading, styleImage, } = this.props;
        const { interval, statusWork } = this.state;
        loading && !statusWork ? this.startLoader() : !loading && statusWork ? this.stopLoader(interval) : null;
        return (
            loading &&
            <View style={[Styles.loading.loading, Styles.loading.center]} >
                <Image
                    style={[{
                        height: 60, width: 60,
                        aspectRatio: 1.17,
                        resizeMode: "contain",
                        transform: [
                            { rotate: `${this.state.deg}deg` },
                        ],
                    }, styleImage]}
                    source={Images.loader}
                    resizeMode="contain"
                />
                <Text style={[Styles.loading.lodingText, { color: textColor }]}>{Strings.loading}</Text>
            </View>
        );
    }
}