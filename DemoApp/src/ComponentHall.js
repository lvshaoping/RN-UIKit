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
import ButtonPage from './ButtonPage'

type Props = {};
export default class ComponentHall extends Component<Props> {
  static navigationOptions = {
    title: 'Hall',
  };
  componentDidMount(){
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <Button title="ButtonPage" onPress={() => navigate('route.ButtonPage')}/>
          <Button title="progressBoxPage" onPress={() => navigate('route.progressBoxPage')}/>
          <Button title="radioBoxPage" onPress={() => navigate('route.radioBoxPage')}/>
          <Button title="ratingBar" onPress={() => navigate('route.ratingBar')}/>
          <Button title="seekBar" onPress={() => navigate('route.seekBar')}/>      
          <Button title="selectBoxPage" onPress={() => navigate('route.selectBoxPage')}/>
          <Button title="TextPage" onPress={() => navigate('route.TextPage')}/>

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