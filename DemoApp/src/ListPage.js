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

import RkList from "./src/components/list/rkList";
import RkItemList from "./src/components/list/rkItemList";
import Title from "./Title";

type Props = {};
export default class ListPage extends Component<Props> {
  static navigationOptions = {
    title: 'ListPage',
  };
  componentDidMount() {
  }
  render() {
    /**
     * showType = small-text/text/big-text
     * 
     * 
     */
    return (
      <View style={styles.container}>
        <Title title="彩种列表样式" />
        <RkList
          date="2018-03-06"
          issueName="2016236期"
          lottoNum="01 02 03 04 05 06|07"
          showType="big-text"
          lottoName="双色球"
          icon="imgPlus"
        />
        <RkList
          date="2018-03-06"
          issueName="2016236期"
          testText="试机号：1 2 3"
          lottoNum="7 6 4"
          showType="big-text"
          icon="imgPlus"
          lottoName="福彩3D"
        />
        <RkList
          date="2018-03-06"
          issueName="2016236期"
          lottoNum="01 02 03 04 05 06|07"
          showType="big-text"
          sign="最新"
        />
        <RkList
          date="2018-03-06"
          issueName="2016236期"
          lottoNum="01 02 03 04 05 06|07"
          showType="text"
        />
        <RkList
          date="2018-03-06"
          issueName="2016236期"
          testText="试机号：1 2 3"
          liftTitle="开奖号："
          lottoNum="1 2 3"
          showType="ball"
          sign="最新"
        />
        <RkList
          date="2018-03-06"
          issueName="2016236期"
          testText="试机号：1 2 3"
          liftTitle="开奖号："
          lottoNum="1 2 3"
          showType="text"
        />
        <RkItemList
          title="追号记录"
          imgUrl="imgChaseRecordGold"
          onClick={() => {
            // this.changeNavigator("route.ChaseNumberHisGold", "金豆追号记录", {})
          }}
        />
        <Title title="基本列表样式" />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});