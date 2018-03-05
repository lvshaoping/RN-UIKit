/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
// import color from '../../src';


type Props = {};
export default class App extends Component<Props> {

  render() {
    // console.log('RN-UIKIT',color)
    console.log('RN-UIKIT')
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>登录</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    // width: width - c.screenPadding * 2 - c.fixPx(20),
    // height: c.fixPx(88),
    // backgroundColor: c.majorColor,
    // borderRadius: c.fixPx(15),
    marginTop: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    // fontSize: c.titleFontSize,
    // color: c.white
  },

});
