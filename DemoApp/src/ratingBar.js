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
export default class ratingBarPage extends Component<Props> {
    static navigationOptions = {
    title: 'ratingBarPage',
  };
  componentDidMount(){
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            ratingBar
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