import {Alert, Text, View} from 'react-native';
import React, { useState } from 'react';
import {defaultScreenStyle} from '../../style/defaultScreenStyle';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../../store/actions/TasksAction';
import { statusTypes } from '../../utils/constant';

const AddTask = () => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('React-Native');
  const [date, setDate] = useState('12 Aralık 2022');
  const [status, setStatus] = useState(statusTypes.INREVIEW);

const dispatch = useDispatch();
    const saveTask=()=>{
      const task ={
        // id: Date.now(),
        title : title,
        date : date,
        status : status,
      };
      setId(id+1);
       dispatch(addNewTask(task));
      /*  Alert.alert('Task Eklendi') */
    }

  return (
    <View style={defaultScreenStyle.container}>
      <Input onChangeText={(value)=> setTitle(value)} value={title} placeholder="Please set title" title="Task Title" />
      <Input onChangeText={(value)=> setDate(value)} value={date} placeholder="Please set date" title="Task Date" />
      <Input onChangeText={(value)=> setStatus(value)}
        value={status}
        placeholder="Please set status"
        title="Task Status"
      />
      <Button
        onPress={() => saveTask()}
        title="Kaydet"
        status="success"
      />
    </View>
  );
};

export default AddTask;

/* const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: '#2c3e50',
     alignItems:'center',
     justifyContent:'center',
    
    },
  
}) */
