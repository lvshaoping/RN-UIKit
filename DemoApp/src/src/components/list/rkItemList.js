/**
 * TradeFoldItem
 * -----必须参数---
 * imgUrl           icon
 * title            title
 * onClick          点击事件
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  Switch
} from 'react-native'

import * as c from "../../styles/constants.js"
// import * as accountConfig from '../../constants/accountConfig'
// import BasePage from '../common/BasePage'
// import * as img from '../../img/index'

const styles = StyleSheet.create({
  menuTouch: {
    height: c.fixPx(100),
    flex: 1,
  },
  menuItem: {
    alignItems: 'center',
    flexDirection: 'column',
    height: c.fixPx(100),
  },
  menuImage: {
    height: c.fixPx(46),
    width: c.fixPx(46),
    alignItems: 'center',
    resizeMode: 'contain',
  },
  menuText: {
    marginTop: c.fixPx(20),
    fontSize: c.fixPx(28),
    color: c.majorTextColor,
    alignItems: 'center',
  },
  
})

export default class RkItemList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ...this.state,
    };
  }


  render() {
    const {title,imgUrl,onClick} = this.props

    return (
      <TouchableOpacity
        onPress={() => {onClick?onClick():null}}
        style={styles.menuTouch} >
        <View style={styles.menuItem}>
          {imgUrl ? <Image source={imgUrl} style={styles.menuImage} /> : null}
          <Text style={styles.menuText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

}