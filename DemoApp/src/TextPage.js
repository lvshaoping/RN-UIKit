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

import RkText from "./src/components/text/rkText";
type Props = {};
export default class TextPage extends Component<Props> {
  static navigationOptions = {
    title: 'TextPage',
  };
  componentDidMount() {
  }
  render() {
    return (
      <View style={styles.container}>
        <RkText h1={true}>h1</RkText>
        <RkText h2={true}>h2</RkText>
        <RkText h3={true}>h3</RkText>
        <RkText h4={true}>h4</RkText>
        <RkText h5={true}>h5</RkText>
        <RkText h6={true}>h6</RkText>
        <RkText style={{color: 'red',fontSize: 40}}>h6</RkText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});