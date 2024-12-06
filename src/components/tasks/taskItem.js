import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/colors';
import {Calendar, Calendar1, Edit, More, Trash} from 'iconsax-react-native';
import {setColor} from '../../utils/functions';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../store/actions/TasksAction';

const TaskItem = ({item}) => {
  const dispatch = useDispatch();
  const deleteItem = ()=>{
    //console.log(item)

Alert.alert('Uyarı', "Kayıt silinecek emin misiniz ?",
[
  {
    text: 'Sil',
    onPress: () => dispatch(deleteTask(item.id)),
  },
  {
    text: 'Vazgeç',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },

]);
  }
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'space-around'}}>
        <View>
          <Text style={styles.title}>{item.title} </Text>
        </View>
        <View>
          <View
            style={{
              backgroundColor: setColor(item.status),
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              paddingVertical: 8,
              borderRadius: 100,
            }}>
            <Text style={styles.status}>{item.status} </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Calendar size="20" color={ThemeColors.black} variant="Outline" />
          <Text style={styles.date}>{item.date} </Text>
        </View>
      </View>
     <View style={{flexDirection:"row", alignItems: "center", justifyContent:"center"}}>
     <TouchableOpacity
     style={{marginHorizontal:10}}
     onPress={deleteItem}
     >
     <Edit size={25} color={ThemeColors.black} variant="Outline" />
     </TouchableOpacity>
     <TouchableOpacity
     onPress={deleteItem}
     >
     <Trash size={25} color={ThemeColors.black} variant="Outline" />
     </TouchableOpacity>
     </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.7,
    borderRadius: 8,
    borderColor: ThemeColors.black,
    marginVertical: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    marginLeft: 10,
  },
  status: {
    fontSize: 14,
    fontWeight: '500',
    color: ThemeColors.white,
  },
});
