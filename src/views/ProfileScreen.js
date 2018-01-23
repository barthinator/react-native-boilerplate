import React from 'react';
import { View } from 'react-native';
import { Header } from '../components/common/Header.js';

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Profile" />
      </View>
    );
  }
}

export default Profile;
