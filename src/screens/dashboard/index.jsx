import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import SectionTitle from '../../components/ui/sectionTitle';
import TasksStatusCard from '../../components/dashboard/tasksStatusCard';
import { defaultScreenStyle } from '../../style/defaultScreenStyle';

const Dashboard = () => {
  const {taskStatus} = useSelector(state => state?.tasks);
  return (
   <View style={defaultScreenStyle.container} >
     <ScrollView >
      <SectionTitle title={'Project Summary '} />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
       
      }}>
        {
        taskStatus.map((item,index) =>(
            <TasksStatusCard item={item} key={item.id}/>
          ))
        }
      </View>
      <SectionTitle title={'Project Statistics '} />

    
    </ScrollView>
   </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  
});
