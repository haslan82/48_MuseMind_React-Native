import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import SectionTitle from '../../components/ui/sectionTitle';
import TasksStatusCard from '../../components/dashboard/tasksStatusCard';
import {defaultScreenStyle} from '../../style/defaultScreenStyle';
import {VictoryPie, VictoryTheme} from 'victory-native';
import { statusTypes } from '../../utils/constant';

const Dashboard = () => {
  const {taskStatus, tasks} = useSelector(state => state?.tasks);
  /*  const data=[
   {quaeter: 1, earnings: 14000},
   {quaeter: 2, earnings: 17500},
   {quaeter: 3, earnings: 19200},
   {quaeter: 4, earnings: 21000},
   {quaeter: 5, earnings: 24500},
   {quaeter: 6, earnings: 27500},
   {quaeter: 7, earnings: 30000},
  ]; */

  const countTaskStatus = status => {
    return tasks.filter(item => item?.status === status).length;
  };


 /*  const calculateTaskStats = (status) => {
    const totalTask = tasks.length; // Toplam görev sayısı
    if (totalTask === 0) return 0; // Görev yoksa yüzdeyi 0 olarak döndür
    const totalCount = tasks.filter(item => item?.status === status).length; // Belirli statüdeki görev sayısı
    const percentage = ((totalCount / totalTask) * 100).toFixed(2); // Yüzde hesaplama
    console.log(status, percentage);
    return percentage; // Yüzdeyi döndür
  }; */

  const calculateTaskStats=(status)=>{
  const totalTask = tasks.length;
  const taskCount = tasks.filter(item => item?.status === status).length;
  const percentage = (( taskCount/totalTask) ).toFixed(2)
// console.log(status,percentage)
return percentage
}

  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <SectionTitle title={'Project Summary '} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          {taskStatus.map((item, index) => (
            <TasksStatusCard 
            value={countTaskStatus(item.status)}
            item={item} key={item.id} />
          ))}
        </View>
        <SectionTitle title={'Project Statistics '} />
        <View style={{marginBottom: 10, marginTop: -20}}>
          <VictoryPie
            cornerRadius={({datum}) => datum.y * 1}
            innerRadius={90}
            padAngle={1}
            labelRadius={180}
            data={[
              {x: 'In Progress', y: calculateTaskStats(statusTypes.INREVIEW)},
              {x: 'In Review', y:  calculateTaskStats(statusTypes.INPROGRESS)},
              {x: 'Complated', y:  calculateTaskStats(statusTypes.COMPLATED)},
              {x: 'On Hold', y:  calculateTaskStats(statusTypes.ONHOLD)},
            ]}
            theme={VictoryTheme.clean}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
