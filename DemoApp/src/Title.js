import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    StackNavigator,
    Button
} from 'react-native';

import * as c from "./src/styles/constants.js";
import colors from "./src/styles/colors.js";
type Props = {};
export default class Title extends Component<Props> {
    static navigationOptions = {
        title: 'Title',
    };
    componentDidMount() {
    }
    render() {
        const { title } = this.props;
        return (
            <View style={styles.title}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        marginTop: c.fixPx(30),
        marginBottom: c.fixPx(30),
        paddingLeft: c.screenPadding,
    },
    titleText: {
        fontSize: c.titleFontSize,
        color: colors.majorTextColor
    }
});