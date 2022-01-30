/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';
const Fullapp = () => {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
};
export default Fullapp;
AppRegistry.registerComponent(appName, () => Fullapp);
