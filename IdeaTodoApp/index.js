import React from 'react';
import { AppRegistry } from 'react-native';
import NavigationStack from './app/navigation/NavigationStack';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

 import configureStore from './app/store/index';

const store = configureStore();

const DreamApp = () =>
   <Provider store={store}>
    <NavigationStack />
   </Provider>

AppRegistry.registerComponent(appName, () => DreamApp);
