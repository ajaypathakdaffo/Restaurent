import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/home';
import Contactus from './screens/contactus'


const App = (prps) => {
  
  const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Contactus:Contactus
    },
    {
      initialRouteName: 'Home',
    },
  );

  const Navigator = createAppContainer(AppNavigator);

  return <Navigator />;
};

export default App;
