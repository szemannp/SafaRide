import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import App from './src/App/App';

import configureStore from './configureStore';


const store = configureStore();

function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <Component
          {...props}
        />
      </Provider>
    );
    return <EnhancedComponent />;
  };
}

export function registerScreens() {
  Navigation.registerComponent('navigation.playground.WelcomeScreen', () => WrappedComponent(App));

  console.log('ALL SCREENS HAVE BEEN REGISTERED');
}
