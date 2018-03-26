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
                onPress={onPress ? () => { onPress() } : null}
                style={[styles.loginButton, buttonStyle, content && { flexDirection: "column" }]}>

                {icon && !iconRight && (
                    <Image source={imgs[icon]} style={styles.iconImg} />
                )}
                <Text style={[styles.loginButtonText, textStyle]}>{title}</Text>
                {icon && iconRight && (
                    <Image source={imgs[icon]} style={styles.iconImg} />
                )}
                {content && (
                    <View style={styles.content}><Text style={styles.contentText}>{content}</Text></View>
                )}
            </TouchableOpacity>
        )
    }
}
/**
 * 主色为红色的长按钮
 * 登录的默认按钮
*/
export class ButtonBigRed extends Component<Props>{
    render() {
        const {onPress}=this.props
        return (
            <RkButton
                title="登录"
                onPress={onPress ? () => { onPress() } : null}
            />
        )
    }
}

/**
 * 主色为白色的长按钮
 * 注册的默认按钮
*/
export class ButtonBigWhite extends Component<Props>{
    render() {
        const {onPress}=this.props
        return (
            <RkButton
                title="没有账号？请注册"
                buttonStyle={{
                    backgroundColor: colors.white,
                    borderColor: colors.majorColor,
                    borderWidth: c.fixPx(1),
                }}
                textStyle={{
                    color: colors.majorColor
                }}
                onPress={onPress ? () => { onPress() } : null}
            />
        )
    }
}

/**
 * 主色为红色的中按钮
 * 注册的默认按钮
*/
export class ButtonMiddleRed extends Component<Props>{
    render() {
        const {onPress}=this.props
        return (
            <RkButton
                title="立即支付"
                buttonStyle={{ width: c.fixPx(500) }}
                onPress={onPress ? () => { onPress() } : null}
            />
        )
    }
}

/**
 * 主色为红色的中按钮
 * 注册的默认按钮
*/
export class ButtonImageSmall extends Component<Props>{
    render() {
        const { title, width, height, borderRadius, icon, iconDirect,onPress } = this.props
        return (
            <RkButton
                title={title ? title : "清空列表"}
                buttonStyle={{
                    width: width ? width : c.smallButtonWidth,
                    height: height ? height : c.fixPx(70),
                    borderColor: colors.lnColor1,
                    borderWidth: c.fixPx(1),
                    backgroundColor: colors.white,
                    paddingLeft: c.minPadding,
                    paddingRight: c.minPadding,
                    borderRadius: borderRadius ? borderRadius : c.fixPx(8)
                }}
                textStyle={{
                    color: colors.majorTextColor,
                    fontSize: c.commonFontSize,
                    marginRight: c.minPadding,
                    marginLeft: c.minPadding,
                }}
                icon={icon ? icon : "imgTrash"}
                iconRight={iconDirect !== undefined ? iconDirect : true}
                onPress={onPress ? () => { onPress() } : null}
            />
        )
    }
}


/**
 * 主色为红色的中按钮
 * 注册的默认按钮
*/
export class ButtonImageMiddle extends Component<Props>{
    render() {
        const {onPress}=this.props
        return (
            <RkButton
                title="清空重选"
                buttonStyle={{
                    width: c.fixPx(338),
                    height: c.fixPx(80),
                    borderColor: colors.lnColor1,
                    borderWidth: c.fixPx(1),
                    backgroundColor: colors.white
                }}
                textStyle={{
                    color: colors.majorTextColor,
                    fontSize: c.commonFontSize,
                    marginLeft: c.minPadding
                }}
                icon="imgTrash"
                iconRight={false}
                onPress={onPress ? () => { onPress() } : null}
            />
        )
    }
}


/**
 * 主色为红色的中按钮
 * 注册的默认按钮
*/
export class ButtonSmallRed extends Component<Props>{
    render() {
        const { title, backgroundColor,onPress } = this.props
        return (
            <RkButton
                title={title ? title : "确定"}
                buttonStyle={{
                    width: c.fixPx(180),
                    height: c.fixPx(98),
                    borderRadius: 0,
                    backgroundColor: backgroundColor ? backgroundColor : colors.majorColor
                }}
                textStyle={{
                    color: colors.white,
                    fontSize: c.fixPx(30)
                }}
                onPress={onPress ? () => { onPress() } : null}
            />
        )
    }
}

/**
 * 主色为红色的中按钮
 * 注册的默认按钮
*/
export class ButtonTwoRowText extends Component<Props>{
    render() {
        const {onPress}=this.props
        return (
            <RkButton
                title="胜"
                content="2.45"
                buttonStyle={{
                    width: c.fixPx(180),
                    height: c.fixPx(82),
                    backgroundColor: colors.majorColor,
                }}
                textStyle={{
                    color: colors.white,
                    fontSize: c.fixPx(24)
                }}
                contentStyle={{
                    color: colors.white,
                    fontSize: c.fixPx(24)
                }}
                onPress={onPress ? () => { onPress() } : null}
            />
        )
    }
}

/**
 * 主色为红色的中按钮
 * 注册的默认按钮
*/
export class ButtonCornerCommon extends Component<Props>{
    render() {
        const { title, backgroundColor, borderColor, textColor ,onPress} = this.props
        return (
            <RkButton
                title={title ? title : "胜负彩"}
                buttonStyle={{
                    width: c.smallButtonWidth,
                    height: c.fixPx(68),
                    borderColor: borderColor ? borderColor : colors.lnColor1,
                    borderWidth: c.fixPx(1),
                    backgroundColor: backgroundColor ? backgroundColor : colors.white
                }}
                textStyle={{
                    color: textColor ? textColor : colors.majorTextColor,
                    fontSize: c.commonFontSize
                }}
                onPress={onPress ? () => { onPress() } : null}
            />
        )
    }
}


/**
 * 主色为红色的中按钮
 * 注册的默认按钮
*/
export class ButtonPlayChuan extends Component<Props>{
    render() {
        const { title, backgroundColor, textColor,onPress } = this.props
        return (
            <RkButton
                title={title ? title : "2串1"}
                buttonStyle={{
                    width: c.smallButtonWidth,
                    height: c.fixPx(62),
                    backgroundColor: backgroundColor ? backgroundColor : colors.majorColor
                }}
                textStyle={{
                    color: textColor ? textColor : colors.white,
                    fontSize: c.fixPx(24)
                }}
                onPress={onPress ? () => { onPress() } : null}
            />
        )
    }
}

/**
 * 主色为红色的中按钮
 * 注册的默认按钮
*/
export class ButtonPlayType extends Component<Props>{
    render() {
        const { title, backgroundColor, textColor, borderColor,onPress } = this.props
        return (
            <RkButton
                title={title ? title : "任选六"}
                buttonStyle={{
                    width: c.fixPx(222),
                    height: c.fixPx(80),
                    borderColor: borderColor ? borderColor : colors.lnColor1,
                    borderWidth: c.fixPx(1),
                    borderRadius: c.fixPx(40),
                    backgroundColor: backgroundColor ? backgroundColor : colors.white,
                }}
                textStyle={{
                    color: textColor ? textColor : colors.majorTextColor,
                    fontSize: c.commonFontSize
                }}
                onPress={onPress ? () => { onPress() } : null}
            />
        )
    }
}

/**
 * 主色为红色的中按钮
 * 注册的默认按钮
*/
export class ButtonPaySelect extends Component<Props>{
    render() {
        const { title, backgroundColor, textColor, borderColor,onPress } = this.props
        return (
            <RkButton
                title={title ? title : "50元"}
                buttonStyle={{
                    width: c.fixPx(160),
                    height: c.fixPx(90),
                    borderColor: borderColor ? borderColor : colors.minorColorGreen,
                    borderWidth: c.fixPx(1),
                    backgroundColor: backgroundColor ? backgroundColor : colors.white
                }}
                textStyle={{
                    color: textColor ? textColor : colors.minorColorGreen,
                    fontSize: c.commonFontSize
                }}
                onPress={onPress ? () => { onPress() } : null}
            />
        )
    }
}