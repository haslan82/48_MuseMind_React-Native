import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Dashboard from '../screens/dashboard';
import {ADDTASK, DASHBOARD, TASKS, UPDATETASK} from '../utils/Routes';
import TaskList from '../screens/tasklist';
import {Pressable, Text, View} from 'react-native';
import {Notification, TaskSquare} from 'iconsax-react-native';
import {ThemeColors} from '../theme/colors';
import AddTask from '../screens/tasklist/addTask';
import UpdateTask from '../screens/tasklist/UpdateTask';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({route, navigation}) => ({
          headerShadowVisible: false,
          headerBackTitle: 'Back',
          headerTintColor: ThemeColors.black,
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold',
          },
        })}>
        <Stack.Screen
          options={({route, navigation}) => ({
            headerShadowVisible: false,
            headerBackVisible: false,
            headerTintColor: ThemeColors.black,
            headerTitleStyle: {
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <Pressable>
                  <Notification size="32" color={ThemeColors.black} />
                </Pressable>
                <Pressable
                  onPress={() => navigation.navigate(TASKS)}
                  style={{marginLeft: 15}}>
                  <TaskSquare size="32" color={ThemeColors.black} />
                </Pressable>
              </View>
            ),
          })}
          name={DASHBOARD}
          component={Dashboard}
        />
        <Stack.Screen name={TASKS} component={TaskList} />
        <Stack.Screen name={ADDTASK} component={AddTask} />
        <Stack.Screen name={UPDATETASK} component={UpdateTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
