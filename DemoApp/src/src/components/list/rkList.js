import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';

type Props = {};

import styles from './types.js';
import imgs from '../../assets/img/index.js';
import * as c from "../../styles/constants.js"
import colors from '../../styles/colors.js';
export default class RkList extends Component<Props> {
    static navigationOptions = {
        title: 'RkList',
    };
    componentDidMount() {
    }
    renderLotteryNumber(numbers, showType) {
        if (!numbers || numbers == undefined || numbers.length == 0) {
            return null;
        }
        let red, blue;
        let showNumber = numbers.trim();
        if (numbers.indexOf('|') === -1) {
            showNumber = showNumber.replace(/\s/g, '^')
            red = showNumber.split('^')
            blue = []
        } else {
            [red, blue] = showNumber.split('|').map((s: string): Array<string> => s.split(' '))
        }
        if (!showType && showType == 'big-text') {
            return (
                <View style={styles.numberGroup}>
                    {red.map((n: string, idx: number): * => (
                        <View key={`red${idx}`} style={styles.bigBall}>
                            <Text style={styles.bigBallText}>{n}</Text>
                        </View>
                    ))}
                    {blue.map((n: string, idx: number): * => (
                        <View key={`blue${idx}`} style={[styles.bigBall, styles.blueBall]}>
                            <Text style={styles.bigBallText}>{n}</Text>
                        </View>
                    ))}
                </View>
            )
        } else if (showType && showType == 'text') {
            return (
                <View style={styles.numberGroup}>
                    {red.map((n: string, idx: number): * => (
                        <Text key={`red${idx}`} style={styles.redText}>{n}</Text>
                    ))}
                    {blue.map((n: string, idx: number): * => (
                        <Text key={`red${idx}`} style={styles.blueText}>{n}</Text>
                    ))}
                </View>
            )
        } else if (showType && showType == 'small-text') {
            return (
                <View style={styles.numberGroup}>
                    {red.map((n: string, idx: number): * => (
                        <Text key={`red${idx}`} style={styles.smallRedText}>{n}</Text>
                    ))}
                    {blue.map((n: string, idx: number): * => (
                        <Text key={`red${idx}`} style={styles.smallBlueText}>{n}</Text>
                    ))}
                </View>
            )
        } else {
            return (
                <View style={styles.numberGroup}>
                    {red.map((n: string, idx: number): * => (
                        <View key={`red${idx}`} style={styles.ball}>
                            <Text style={styles.ballText}>{n}</Text>
                        </View>
                    ))}
                    {blue.map((n: string, idx: number): * => (
                        <View key={`blue${idx}`} style={[styles.ball, styles.blueBall]}>
                            <Text style={styles.ballText}>{n}</Text>
                        </View>
                    ))}
                </View>
            )
        }

    }
    render() {
        const { onPress, date, issueName, testText, liftTitle, lottoNum, lottoName, showType, sign, icon } = this.props;
        return (
            <TouchableHighlight
                underlayColor={colors.minorColorGreen}
                onPress={onPress ? onPress : null}>
                <View style={styles.item}>
                    {icon && <Image source={imgs[icon]} style={styles.itemIcon} />}
                    <View style={styles.itemBody}>
                        <View style={styles.lottoAndIssue}>
                            {lottoName && <Text style={styles.lottoName}>{lottoName}</Text>}
                            <Text style={styles.issueText}>{issueName}</Text>
                            <Text style={styles.dateText}>{date}</Text>
                            {sign && <View style={styles.newView}><Text style={styles.newText}>{sign}</Text></View>}
                        </View>
                        {/* {this.renderLotteryNumber(lottoNum, showType)} */}
                        <View style={styles.lottoAndIssue}>
                            {liftTitle && <Text style={styles.d3line2}>{liftTitle}</Text>}
                            {this.renderLotteryNumber(lottoNum, showType)}
                            {testText && <Text style={styles.d3line2}>{testText}</Text>}
                        </View>
                    </View>
                    <View style={styles.iconView}>
                        <Image source={imgs.imgRightArrowGrey} style={styles.angleRight} />
                    </View>

                </View>
            </TouchableHighlight>)

    }
}
