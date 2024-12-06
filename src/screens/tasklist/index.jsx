import {FlatList, Text, View} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../style/defaultScreenStyle';
import FloatActionButton from '../../components/ui/floatActionButton';
import {useSelector} from 'react-redux';
import TaskItem from '../../components/tasks/taskItem';
import { useNavigation } from '@react-navigation/native';
import { ADDTASK } from '../../utils/Routes';

const Tasks = ({navigation})/* aynı bileşen içerinde route olarak kulanırız */ => {
  const {tasks} = useSelector(state => state?.tasks);

// const navigation = useNavigation();
// 2. navigasyon yöntemi



  return (
    <View style={defaultScreenStyle.container}>
      <FlatList 
      ListEmptyComponent={<Text style={{
        textAlign: 'center',
        marginTop: 200,
      }} >Henüz iş oluturulmadı.</Text>}
      data={tasks} renderItem={({item}) => <TaskItem item={item} />} />
      <FloatActionButton 
      onPress={(()=>navigation.navigate(ADDTASK))}
      />
    </View>
  );
};

export default Tasks;
