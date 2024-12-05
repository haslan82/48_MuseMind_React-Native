import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Dashboard from '../screens/dashboard';
import {DASHBOARD, TASKS} from '../utils/Routes';
import TaskList from '../screens/tasklist';
import {Pressable, Text} from 'react-native';
import {Notification} from 'iconsax-react-native';
import { ThemeColors } from '../theme/colors';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({route, navigation}) => ({
          /* headerTitle: route.name,
          headerBackTitle: 'Back',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, */
          headerShadowVisible: false,
          headerTitleStyle:{
            fontSize: 22,
            fontWeight: 'bold'
          },
          headerRight: () => (
            <Pressable>
              <Notification size="32" color={ThemeColors.black} />
            </Pressable>
          ),
        })}>
        <Stack.Screen name={DASHBOARD} component={Dashboard} />
        <Stack.Screen name={TASKS} component={TaskList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
