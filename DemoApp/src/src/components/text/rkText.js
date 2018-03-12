import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import styles from './types.js';
import * as c from "../../styles/constants.js";
type Props = {};
export default class RkText extends Component<Props> {
  static navigationOptions = {
    title: 'TextPage',
  };
  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    const { style, children, h1, h2, h3, h4, h5, h6, fontFamily } = this.props;

    return (
      <Text
        style={[
          styles.text,
          h1 && { fontSize: c.fixPx(34) },
          h2 && { fontSize: c.fixPx(32) },
          h3 && { fontSize: c.fixPx(30) },
          h4 && { fontSize: c.fixPx(28) },
          h5 && { fontSize: c.fixPx(26) },
          h6 && { fontSize: c.fixPx(22) },
          fontFamily && { fontFamily },
          style && style,
        ]}>
        {children}
      </Text>
    )
  }
}