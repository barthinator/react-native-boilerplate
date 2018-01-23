import React from 'react';
import { View } from 'react-native';
import { Header } from '../components/common/Header.js';

class Collab extends React.Component {
  static navigationOptions = {
    title: 'Collab',
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Collab" />
      </View>
    );
  }
}

export default Collab;
