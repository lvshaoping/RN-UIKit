import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    Image,
} from 'react-native';
import colors from "../../styles/colors.js";
import * as c from "../../styles/constants.js";
import imgs from '../../assets/img/index.js';
import styles from './types.js';

type Props = {};
export default class RkButton extends Component<Props> {
    static navigationOptions = {
        title: 'ButtonPage',
    };
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        const { title, type, buttonStyle, textStyle, onPress, icon, iconRight, content } = this.props;

        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={onPress?()=>{onPress()}:null}
                style={[styles.loginButton, buttonStyle, content&&{flexDirection: "column"}]}>

                {icon&&!iconRight&&(
                    <Image source={imgs[icon]} style={styles.iconImg} />
                )}
                <Text style={[styles.loginButtonText, textStyle]}>{title}</Text>
                {icon&&iconRight&&(
                    <Image source={imgs[icon]} style={styles.iconImg} />
                )}
                {content&&(
                    <View style={styles.content}><Text style={styles.contentText}>{content}</Text></View>
                )}
            </TouchableOpacity>
        )
    }
}