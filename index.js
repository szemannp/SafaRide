import { registerScreens } from './registerScreens';
import { Navigation } from 'react-native-navigation';

// This is needed to enable network debugging
// eslint-disable-next-line no-undef
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ? GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;

registerScreens();

console.disableYellowBox = true;

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'navigation.playground.WelcomeScreen'
      }
    }
  });
});
