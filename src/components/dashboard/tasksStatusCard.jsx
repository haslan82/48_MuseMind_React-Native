import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {  MoreCircle } from 'iconsax-react-native';
import { ThemeColors } from '../../theme/colors';

const TasksStatusCard = ({item,value}) => {
  return (
    <View style={[styles.container, {backgroundColor: item.color}]}>
     <View>
     <Text style={styles.value} >{value} </Text>
     <Text style={styles.status} >{item.status} </Text>
     </View>
     <View>
      <Pressable>
      <MoreCircle size="32" color={ThemeColors.white} />
      </Pressable>
     </View>
    </View>
  );
};

export default TasksStatusCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '45%',
    margin: 5,
    height: 170,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  value:{
    fontSize: 24,
    fontWeight: '700',
   
  },
  status:{
    fontSize: 16,
    marginTop:10,
    fontWeight:"500"
  }
});
