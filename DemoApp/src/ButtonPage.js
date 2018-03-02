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
import { RkButton } from 'rn-uikit';
type Props = {};
export default class ButtonPage extends Component<Props> {
    static navigationOptions = {
    title: 'ButtonPage',
  };
  componentDidMount(){
  }
  render() {
    return (
      <View style={styles.container}>
        {/*<Text style={styles.welcome}>
            ButtonPage
        </Text>*/}
        <RkButton />
            </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});