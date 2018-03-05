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
import RkButton from "./src/components/button/rkButton";

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
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.title("A1 主要引导按钮")}
          <RkButton
            title="登录"
            onPress={() => { console.log('Click Button!') }}
          />
          <View style={styles.line}></View>
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
          />
          <View style={styles.line}></View>
          <RkButton
            title="立即支付"
            buttonStyle={{ width: c.fixPx(500) }}
          />
          {this.title("A2 普通按钮样式")}
          <RkButton
            title="继续选号"
            buttonStyle={{
              width: c.fixPx(162),
              height: c.fixPx(70),
              borderColor: colors.lnColor1,
              borderWidth: c.fixPx(1),
              backgroundColor: colors.white
            }}
            textStyle={{
              color: colors.majorTextColor,
              fontSize: c.fixPx(26),
            }}
            icon="imgPlus"
            iconRight={false}
          />
          <View style={styles.line}></View>
          <RkButton
            title="清空列表"
            buttonStyle={{
              width: c.fixPx(162),
              height: c.fixPx(70),
              borderColor: colors.lnColor1,
              borderWidth: c.fixPx(1),
              backgroundColor: colors.white
            }}
            textStyle={{
              color: colors.majorTextColor,
              fontSize: c.fixPx(26),
            }}
            icon="imgTrash"
            iconRight={true}
          />
          <View style={styles.line}></View>
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
              fontSize: c.fixPx(26)
            }}
            icon="imgTrash"
            iconRight={false}
          />

          {this.title("A3 确定性按钮样式")}
          <RkButton
            title="确定"
            buttonStyle={{
              width: c.fixPx(180),
              height: c.fixPx(98),
              borderRadius: 0,
              backgroundColor: colors.majorColor
            }}
            textStyle={{
              color: colors.white,
              fontSize: c.fixPx(30)
            }}
          />
          <View style={styles.line}></View>
          <RkButton
            title="追号"
            buttonStyle={{
              width: c.fixPx(180),
              height: c.fixPx(98),
              borderRadius: 0,
              backgroundColor: colors.minorColorBlue,
            }}
            textStyle={{
              color: colors.white,
              fontSize: c.fixPx(30)
            }}
          />

          {this.title("A4 内容性按钮样式")}
        
          <View style={styles.line}></View>
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
          />
          <View style={styles.line}></View>
          <RkButton
            title="胜负彩"
            buttonStyle={{
              width: c.fixPx(162),
              height: c.fixPx(68),
              borderColor: colors.lnColor1,
              borderWidth: c.fixPx(1),
              backgroundColor: colors.white
            }}
            textStyle={{
              color: colors.majorTextColor,
              fontSize: c.fixPx(26)
            }}
          />
          <View style={styles.line}></View>
          <RkButton
            title="竞彩足球"
            buttonStyle={{
              width: c.fixPx(162),
              height: c.fixPx(68),
              borderColor: colors.majorColor,
              borderWidth: c.fixPx(1),
              backgroundColor: colors.white
            }}
            textStyle={{
              color: colors.majorColor,
              fontSize: c.fixPx(26)
            }}
          />
          <View style={styles.line}></View>
          <RkButton
            title="2串1"
            buttonStyle={{
              width: c.fixPx(162),
              height: c.fixPx(62),
            }}
            textStyle={{
              color: colors.white,
              fontSize: c.fixPx(24)
            }}
          />
          <View style={styles.line}></View>
          <RkButton
            title="任选五"
            buttonStyle={{
              width: c.fixPx(222),
              height: c.fixPx(80),
              borderColor: colors.majorColor,
              borderWidth: c.fixPx(1),
              borderRadius: c.fixPx(40),
              backgroundColor: colors.white
            }}
            textStyle={{
              color: colors.majorColor,
              fontSize: c.fixPx(26)
            }}
          />
          <View style={styles.line}></View>
          <RkButton
            title="任选六"
            buttonStyle={{
              width: c.fixPx(222),
              height: c.fixPx(80),
              borderColor: colors.lnColor1,
              borderWidth: c.fixPx(1),
              borderRadius: c.fixPx(40),
              backgroundColor: colors.white
            }}
            textStyle={{
              color: colors.majorTextColor,
              fontSize: c.fixPx(26)
            }}
          />
          <View style={styles.line}></View>
          <RkButton
            title="50元"
            buttonStyle={{
              width: c.fixPx(160),
              height: c.fixPx(90),
              borderColor: colors.minorColorGreen,
              borderWidth: c.fixPx(1),
              backgroundColor: colors.white
            }}
            textStyle={{
              color: colors.minorColorGreen,
              fontSize: c.fixPx(26)
            }}
          />
          <View style={styles.line}></View>
          <RkButton
            title="100元"
            buttonStyle={{
              width: c.fixPx(160),
              height: c.fixPx(90),
              borderColor: colors.white,
              borderWidth: c.fixPx(1),
              backgroundColor: colors.minorColorGreen
            }}
            textStyle={{
              color: colors.white,
              fontSize: c.fixPx(26)
            }}
          />
        <View style={styles.line}></View>
          <RkButton
            title="摇一摇"
            buttonStyle={{
              width: c.fixPx(222),
              height: c.fixPx(80),
              borderColor: colors.lnColor1,
              borderWidth: c.fixPx(1),
              borderRadius: c.fixPx(40),
              backgroundColor: colors.white
            }}
            textStyle={{
              color: colors.majorTextColor,
              fontSize: c.fixPx(26)
            }}
            icon="imgShake"
            iconRight={true}
          />
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