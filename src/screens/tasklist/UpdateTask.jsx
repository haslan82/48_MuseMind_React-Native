import { useState } from 'react';
import { Alert, Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native';
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
      Alert.alert('Task başarıyla kaydedildi!');
  
      // 2 saniye bekleyip TaskList sayfasına yönlendirme
      setTimeout(() => {
        navigation.navigate('Dashboard');
      }, 2000);
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
  });