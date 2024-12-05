import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/RootNavigator';
import { Provider } from 'react-redux';
import store from './src/store';


const App = () => {

  return (
<Provider store={store}>

<RootNavigator />
  
</Provider>
)
};

export default App;
