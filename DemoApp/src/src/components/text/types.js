import React, { Component } from 'react';
import {
    StyleSheet,
    Platform,
} from 'react-native';
import colors from "../../styles/colors.js";
import * as c from "../../styles/constants.js";


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    loginButton: {
        width: c.width - c.screenPadding * 2 - c.screenPadding,
        height: c.fixPx(88),
        backgroundColor: colors.majorColor,
        borderRadius: c.fixPx(15),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                height: c.fixPx(88),
            },
            android: {
                height: c.fixPx(98),
            },
        }),
        flexDirection: "row",
    },
    loginButtonText: {
        fontSize: c.titleFontSize,
        color: colors.white
    },
    regViewStyle: {
        backgroundColor: colors.white,
        borderColor: colors.majorColor,
        borderWidth: c.fixPx(1),
    },
    button: {
        backgroundColor: colors.white,
        borderRadius: c.fixPx(8),
        borderWidth: c.fixPx(0.5),
        borderColor: colors.lnColor1,
        height: c.fixPx(70),
        width: c.fixPx(162),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: c.fixPx(5),
        marginLeft: c.fixPx(5),
        flexDirection: "row",
    },
    buttonText: {
        fontSize: c.fixPx(26),
        color: colors.majorTextColor,
    },
    iconImg: {
        alignSelf: "center",
        resizeMode: "center"
    },
    confirmButton: {
        backgroundColor: colors.majorColor,
        width: c.fixPx(210),
        borderRadius: 0,
        height: c.fixPx(98)
    },
    confirmText: {
        color: colors.white,
        fontSize: c.fixPx(30)
    },
    content:{
        
    },
    contentText:{
        color:colors.white,
        fontSize: c.fixPx(24),
        marginTop: c.fixPx(4)
    }
});