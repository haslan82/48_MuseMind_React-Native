import {useState} from 'react';
import {Text, View, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/ui/Button';
import {addNewTask, changeTask} from '../../store/actions/TasksAction';
import {statusTypes} from '../../utils/constant';
import DatePicker from 'react-native-modern-datepicker';
import Input from '../../components/ui/Input';
import { ThemeColors } from '../../theme/colors';

const UpdateTask = ({route}) => {
  const task = route?.params?.task;

  const [title, setTitle] = useState(task.title);
  const [date, setDate] = useState(task.date);
  const [status, setStatus] = useState(task.status);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const saveTask = () => {
    const form = {
      id: task.id,
      title: title,
      date: date,
      status: status,
    };
    dispatch(changeTask(form));

    setTimeout(() => {
      navigation.navigate('Dashboard');
    }, 900);
  };

  const toggleDatePicker = () => setDatePickerVisible(!isDatePickerVisible);
  const toggleModal = () => setModalVisible(!isModalVisible);

  return (
    <View style={styles.container}>
      <View style={{marginLeft: -13}}>
        <Input
          onChangeText={value => setTitle(value)}
          value={title}
          placeholder="Please set title"
          title="Task Title"
        />
      </View>

      <Text style={styles.label}>Task Date</Text>
      <TouchableOpacity style={styles.dropdown} onPress={toggleDatePicker}>
        <Text style={{fontSize: 16}}>{date || 'Please set date'}</Text>
      </TouchableOpacity>

      <View style={{marginBottom: 26, marginTop: 20}}>
        <Text style={{fontSize: 18, marginLeft: 2, marginBottom: 10}}>
          Task Status
        </Text>
        <TouchableOpacity onPress={toggleModal} style={styles.dropdown}>
          <Text style={styles.dropdownText}>
            {status || 'Please select status'}
          </Text>
        </TouchableOpacity>
      </View>

      <Button onPress={saveTask} title="Güncelle" status="primary" />

      {/* DatePicker Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isDatePickerVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              mode="calendar"
              selected={date}
              onDateChange={setDate}
            />
            <Button
              onPress={toggleDatePicker}
              title="Date Picker Close"
              status="danger"
            />
          </View>
        </View>
      </Modal>

      {/* Task Status Modal */}
      {isModalVisible && (
        <Modal
          transparent={true}
          animationType="slide"
          visible={isModalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Task Status</Text>
              {Object.values(statusTypes).map(item => (
                <TouchableOpacity
                  key={item}
                  style={styles.modalItem}
                  onPress={() => {
                    setStatus(item);
                    toggleModal();
                  }}>
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              ))}
              <Button onPress={toggleModal} title="Kapat" status="danger" />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default UpdateTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: ThemeColors.white,
  },
  label: {
    fontSize: 18,

    marginVertical: 10,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: ThemeColors.gray,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  dropdown: {
    padding: 15,
    borderWidth: 1,
    borderColor: ThemeColors.gray,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
    marginBottom: 20,
  },
  dropdownText: {
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalItemText: {
    fontSize: 16,
  },
});






/* import { useState } from 'react';
import {  Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { defaultScreenStyle } from '../../style/defaultScreenStyle';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { statusTypes } from '../../utils/constant';
import { changeTask } from '../../store/actions/TasksAction';


const UpdateTask = ({route}) => {
  //! console.log('Received params in UpdateTask:', route);
    const task= route?.params?.task
   //! console.log('Task object:', task); // Debug log
  
    const [title, setTitle] = useState(task.title);
    const [date, setDate] = useState(task.date);
    const [status, setStatus] = useState(task.status);
    const [isModalVisible, setModalVisible] = useState(false);
  
    const dispatch = useDispatch();
    const navigation = useNavigation();
  
    const saveTask = () => {
      const form = {
        id: task.id,
        title: title,
        date: date,
        status: status,
      };
      dispatch(changeTask(form));
     
  
      // 2 saniye bekleyip TaskList sayfasına yönlendirme
      setTimeout(() => {
        navigation.navigate('Dashboard');
      }, 900);
    };
  
    const toggleModal = () => setModalVisible(!isModalVisible);
  
    return (
      <View style={defaultScreenStyle.container}>
        <Input
          onChangeText={(value) => setTitle(value)}
          value={title}
          placeholder="Please set title"
          title="Task Title"
        />





        <Input
          onChangeText={(value) => setDate(value)}
          value={date}
          placeholder="Please set date"
          title="Task Date"
        />
        
        <View style={{ marginBottom: 16,marginTop:18 }}>
    <Text style={{fontWeight:'500', fontSize:18, marginLeft:10}}>Task Status</Text>
    <TouchableOpacity onPress={toggleModal} style={styles.dropdown}>
      <Text style={styles.dropdownText}>{status || 'Please select status'}</Text>
    </TouchableOpacity>
  </View>
  
        <Button onPress={saveTask} title="Güncelle" status="primary" />
  
        {isModalVisible && (
          <Modal transparent={true} animationType="slide" visible={isModalVisible}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Task Status</Text>
                {Object.values(statusTypes).map((item) => (
                  <TouchableOpacity
                    key={item}
                    style={styles.modalItem}
                    onPress={() => {
                      setStatus(item);
                      toggleModal();
                    }}
                  >
                    <Text style={styles.modalItemText}>{item}</Text>
                  </TouchableOpacity>
                ))}
                <Button onPress={toggleModal} title="Kapat" status="danger" />
              </View>
            </View>
          </Modal>
        )}
      </View>
    );
}

export default UpdateTask

const styles = StyleSheet.create({
    dropdown: {
      padding: 15,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginVertical: 5,
      marginHorizontal:10,
      backgroundColor:'#f2f2f2'
    },
    dropdownText: {
      fontSize: 16,
      color: '#333',
      fontWeight: '600',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '80%',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      elevation: 5,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    modalItem: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    modalItemText: {
      fontSize: 16,
      fontWeight: '400',
    },
  }); */