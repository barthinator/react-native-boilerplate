import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import LibraryList from '../components/LibraryList';

const Feed = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <LibraryList />
      </View>
    </Provider>
  );
};

export default Feed;
