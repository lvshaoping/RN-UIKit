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

type Props = {};
export default class seekBarPage extends Component<Props> {
    static navigationOptions = {
    title: 'seekBarPage',
  };
  componentDidMount(){
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            seekBar
        </Text>
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