import React from 'react';
// import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import Maintab from './src/component/maintab';
import reducers from './src/redux/reducers';

class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
     
      <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}> 
        <NavigationContainer>
            <Maintab />
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App;