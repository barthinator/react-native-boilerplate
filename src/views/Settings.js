import React from 'react';
import { View } from 'react-native';
import { Header } from '../components/common/Header.js';

class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Settings" />
      </View>
    );
  }
}

export default Settings;
