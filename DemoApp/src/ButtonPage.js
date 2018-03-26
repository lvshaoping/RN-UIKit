import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import colors from "./src/styles/colors.js";
import * as c from "./src/styles/constants.js";
import {
   ButtonBigRed,ButtonBigWhite, ButtonMiddleRed, ButtonImageSmall,
  ButtonImageMiddle, ButtonSmallRed, ButtonTwoRowText, ButtonCornerCommon, ButtonPlayChuan,
  ButtonPlayType, ButtonPaySelect
} from "rn-uikit";
// "./src/components/button/rkButton";

type Props = {};
export default class ButtonPage extends Component<Props> {
  static navigationOptions = {
    title: 'ButtonPage',
  };
  constructor() {
    super();
    this.title = this.title.bind(this);
  }

  componentDidMount() {
  }
  title = (title) => {
    return (
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    )
  }
  renderLoginButton = () => {
    return (
      <ButtonBigRed />
    )
  }
  renderRegButton = () => {
    return (
      <ButtonBigWhite />
    )
  }
  renderPayNowButton = () => {
    return (
      <ButtonMiddleRed />
    )
  }
  renderSelectButton = () => {
    return (
      <ButtonImageSmall title="继续选号" icon={"imgPlus"} iconDirect={false} />

    )
  }
  renderClearButton = () => {
    return (
      <ButtonImageSmall />
    )
  }
  renderClearAndSelectButton = () => {
    return (
      <ButtonImageMiddle />
    )
  }

  renderConfirmButton = () => {
    return (
      <ButtonSmallRed />
    )
  }
  renderBlueConfirmButton = () => {
    return (
      <ButtonSmallRed title="追号" backgroundColor={colors.minorColorBlue} />
    )
  }
  renderOddsButton = () => {
    return (
      <ButtonTwoRowText />
    )
  }
  renderSFCButton = () => {
    return (
      <ButtonCornerCommon />
    )
  }
  renderJCzqButton = () => {
    return (
      <ButtonCornerCommon title="竞彩足球" backgroundColor={colors.white} textColor={colors.majorColor} borderColor={colors.majorColor} />
    )
  }
  renderChuanButton = () => {
    return (
      <ButtonPlayChuan />
    )
  }
  renderChuanButton2 = () => {
    return (
      <ButtonPlayChuan title={'3串1'} backgroundColor={colors.white} textColor={colors.majorTextColor} />
    )
  }

  renderPlayTypeSelectedButton = () => {
    return (
      <ButtonPlayType title="任选五" borderColor={colors.majorColor} backgroundColor={colors.white} textColor={colors.majorColor} />
    )
  }
  renderPlayTypeNoSelectButton = () => {
    return (
      <ButtonPlayType />
    )
  }
  renderRechargeButton = () => {
    return (
      <ButtonPaySelect />
    )
  }
  renderRechargeSelectedButton = () => {
    return (
      <ButtonPaySelect title="100元" borderColor={colors.white} backgroundColor={colors.minorColorGreen} textColor={colors.white} />
    )
  }
  renderImageButton = () => {
    return (
      <ButtonImageSmall title="摇一摇" width={c.fixPx(222)} height={c.fixPx(80)} borderRadius={c.fixPx(40)} icon={"imgShake"} />
    )
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.title("A1 主要引导按钮")}
          {this.renderLoginButton()}
          <View style={styles.line}></View>
          {this.renderRegButton()}
          <View style={styles.line}></View>
          {this.renderPayNowButton()}
          {this.title("A2 普通按钮样式")}
          {this.renderSelectButton()}
          <View style={styles.line}></View>
          {this.renderClearButton()}
          <View style={styles.line}></View>
          {this.renderClearAndSelectButton()}
          {this.title("A3 确定性按钮样式")}
          {this.renderConfirmButton()}
          <View style={styles.line}></View>
          {this.renderBlueConfirmButton()}
          {this.title("A4 内容性按钮样式")}
          <View style={styles.line}></View>
          {this.renderOddsButton()}
          <View style={styles.line}></View>
          {this.renderSFCButton()}
          <View style={styles.line}></View>
          {this.renderJCzqButton()}
          <View style={styles.line}></View>
          {this.renderChuanButton()}
          <View style={styles.line}></View>
          {this.renderChuanButton2()}
          <View style={styles.line}></View>
          {this.renderPlayTypeSelectedButton()}
          <View style={styles.line}></View>
          {this.renderPlayTypeNoSelectButton()}
          <View style={styles.line}></View>
          {this.renderRechargeButton()}
          <View style={styles.line}></View>
          {this.renderRechargeSelectedButton()}
          <View style={styles.line}></View>
          {this.renderImageButton()}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: c.fixPx(22),
    paddingBottom: c.fixPx(200)
  },
  line: {
    marginTop: c.fixPx(30)
  },
  title: {
    marginTop: c.fixPx(30),
    marginBottom: c.fixPx(30),
  },
  titleText: {
    fontSize: c.titleFontSize,
    color: colors.majorTextColor
  }

});