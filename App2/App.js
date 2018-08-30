import React from 'react';
import { AppRegistry } from 'react-native';
import { Stack } from './Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import AllReducer from './reducer'

const store = createStore(AllReducer);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Stack />
      </Provider>
     //<Stack />
    );
  }
}


AppRegistry.registerComponent('reactTutorialApp', () => Stack);


