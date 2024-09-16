import { AppRegistry } from 'react-native';
import App from './src/App';
import JuspayTopView from './src/JuspayTopView';
import JuspayTopViewAttached from './src/JuspayTopViewAttached';
import { name as appName } from './app.json';
import TestSDKReact from 'test-sdk-payments';

AppRegistry.registerComponent(appName, () => App);

TestSDKReact.notifyAboutRegisterComponent(
  TestSDKReact.JuspayHeaderAttached
);
AppRegistry.registerComponent(
  TestSDKReact.JuspayHeaderAttached,
  () => JuspayTopViewAttached
);
TestSDKReact.notifyAboutRegisterComponent(TestSDKReact.JuspayHeader);
AppRegistry.registerComponent(
  TestSDKReact.JuspayHeader,
  () => JuspayTopView
);
