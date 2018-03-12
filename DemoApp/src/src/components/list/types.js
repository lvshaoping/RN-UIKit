import React, { Component } from 'react';
import {
    StyleSheet,
    Platform,
} from 'react-native';
import colors from "../../styles/colors.js";
import * as c from "../../styles/constants.js";


export default StyleSheet.create({
    item: {
        // flex: 1,
        height: c.fixPx(140),
        borderBottomWidth: c.fixPx(0.5),
        // backgroundColor: colors.minorColorGreen,
        backgroundColor: colors.white,
        borderColor: colors.lnColor1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    lottoAndIssue: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: c.fixPx(11),
        alignItems: 'center'
    },
    issueText: {
        color: colors.normalTextColor,
        fontSize: c.fixPx(26),
        alignSelf: 'center'
    },
    dateText: {
        marginLeft: c.fixPx(33),
        color: colors.normalTextColor,
        fontSize: c.fixPx(26),
        alignSelf: 'center'
    },
    itemBody: {
        marginLeft: c.fixPx(14),
    },
    iconView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    newView: {
        marginLeft: c.fixPx(13),
        backgroundColor: colors.majorColor,
        width: c.fixPx(82),
        borderRadius: c.fixPx(19),
        height: c.fixPx(38),
        alignItems: 'center',
        justifyContent: 'center',
    },
    newText: {
        fontSize: c.fixPx(26),
        color: colors.white
    },
    d3line2: {
        color: colors.majorTextColor,
        fontSize: c.fixPx(26),
    },
    angleRight: {
        alignSelf: "center",
        resizeMode: "center",
        marginRight: c.screenPadding,
    },
    footer: {
        height: c.fixPx(60),
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberGroup: {
        flexDirection: 'row',
    },
    ball: {
        height: c.fixPx(50),
        width: c.fixPx(50),
        backgroundColor: colors.majorColor,
        borderRadius: c.fixPx(25),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: c.fixPx(14),
    },
    bigBall: {
        height: c.fixPx(66),
        width: c.fixPx(66),
        backgroundColor: colors.majorColor,
        borderRadius: c.fixPx(33),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: c.fixPx(10),
    },
    blueBall: {
        backgroundColor: colors.minorColorBlue,
    },
    ballText: {
        fontSize: c.fixPx(28),
        color: colors.white,
        backgroundColor: 'transparent'
    },
    bigBallText: {
        fontSize: c.fixPx(34),
        color: colors.white,
        backgroundColor: 'transparent'
    },
    redText: {
        marginRight: c.fixPx(30),
        fontSize: c.fixPx(30),
        color: colors.majorColor,
        width: c.fixPx(40),
    },
    blueText: {
        marginRight: c.fixPx(30),
        fontSize: c.fixPx(30),
        color: colors.minorColorBlue,
        width: c.fixPx(40),
    },
    smallRedText: {
        marginRight: c.fixPx(10),
        fontSize: c.fixPx(26),
        color: colors.majorColor,
    },
    smallBlueText: {
        marginRight: c.fixPx(10),
        fontSize: c.fixPx(26),
        color: colors.minorColorBlue,
    },
    lottoName: {
        color: colors.majorTextColor,
        fontSize: c.fixPx(30),
        marginRight: c.fixPx(14)
    }
});