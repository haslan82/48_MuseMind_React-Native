import React, { useState } from 'react';
import { Alert, Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { defaultScreenStyle } from '../../style/defaultScreenStyle';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { addNewTask } from '../../store/actions/TasksAction';
import { statusTypes } from '../../utils/constant';

const AddTask = () => {
  const [title, setTitle] = useState('React-Native');
  const [date, setDate] = useState('12 Aralık 2022');
  const [status, setStatus] = useState(statusTypes.INREVIEW);
  const [isModalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const saveTask = () => {
    const task = {
      id: Date.now(),
      title: title,
      date: date,
      status: status,
    };
    dispatch(addNewTask(task));
    Alert.alert('Task başarıyla kaydedildi!');

    // 2 saniye bekleyip TaskList sayfasına yönlendirme
    setTimeout(() => {
      navigation.navigate('TaskList');
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
      
      <View style={{ marginBottom: 16 }}>
  <Text style={{fontWeight:'500', fontSize:18, marginLeft:10}}>Task Status</Text>
  <TouchableOpacity onPress={toggleModal} style={styles.dropdown}>
    <Text style={styles.dropdownText}>{status || 'Please select status'}</Text>
  </TouchableOpacity>
</View>

      <Button onPress={saveTask} title="Kaydet" status="success" />

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
};

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

export default AddTask;






/* //!! 

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
      //  Alert.alert('Task Eklendi') 
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
*/




/* //!!!!!
import React, { useState } from 'react';
import { Alert, Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { defaultScreenStyle } from '../../style/defaultScreenStyle';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { addNewTask } from '../../store/actions/TasksAction';
import { statusTypes } from '../../utils/constant';

const AddTask = () => {
  const [title, setTitle] = useState('React-Native');
  const [date, setDate] = useState('12 Aralık 2022');
  const [status, setStatus] = useState(statusTypes.INREVIEW);
  const [isModalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const saveTask = () => {
    const task = {
      id: Date.now(),
      title: title,
      date: date,
      status: status,
    };
    dispatch(addNewTask(task));
    Alert.alert('Task başarıyla kaydedildi!');

    // 2 saniye bekleyip TaskList sayfasına yönlendirme
    setTimeout(() => {
      navigation.navigate('TaskList');
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
      <TouchableOpacity onPress={toggleModal} style={styles.dropdown}>
        <Text style={styles.dropdownText}>{status || 'Please select status'}</Text>
      </TouchableOpacity>

      <Button onPress={saveTask} title="Kaydet" status="success" />

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
};

const styles = StyleSheet.create({
  dropdown: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
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

export default AddTask;

*/







/* import React, { useState } from 'react';
import { Alert, Modal, Text, TouchableOpacity, View, StyleSheet, FlatList } from 'react-native';
import { defaultScreenStyle } from '../../style/defaultScreenStyle';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../../store/actions/TasksAction';
import { statusTypes } from '../../utils/constant';

const AddTask = () => {
  const [title, setTitle] = useState('React-Native');
  const [date, setDate] = useState('12 Aralık 2022');
  const [status, setStatus] = useState(statusTypes.INREVIEW);
  const [isModalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  const saveTask = () => {
    const task = {
      id: Date.now(),
      title: title,
      date: date,
      status: status,
    };
    dispatch(addNewTask(task));
    Alert.alert('Task başarıyla kaydedildi!');
  };

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const handleStatusSelect = (selectedStatus) => {
    setStatus(selectedStatus);
    closeModal();
  };

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
      <TouchableOpacity onPress={openModal} style={styles.dropdown}>
        <Text style={styles.dropdownText}>{status || 'Please select status'}</Text>
      </TouchableOpacity>

      <Button onPress={saveTask} title="Kaydet" status="success" />

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Task Status</Text>
            <FlatList
              data={Object.values(statusTypes)}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => handleStatusSelect(item)}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <Button onPress={closeModal} title="Kapat" status="danger" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
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

export default AddTask; */

/* const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: '#2c3e50',
     alignItems:'center',
     justifyContent:'center',
    
    },
  
}) */



    /* import React, { useState } from 'react';
import { Alert, Text, View, StyleSheet } from 'react-native';
import { defaultScreenStyle } from '../../style/defaultScreenStyle';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../../store/actions/TasksAction';
import { statusTypes } from '../../utils/constant';
import { Picker } from '@react-native-picker/picker';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState(statusTypes.INREVIEW);

  const dispatch = useDispatch();

  const saveTask = () => {
    if (!title || !date || !status) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun!');
      return;
    }

    const task = {
      id: Date.now(), // Benzersiz ID için `Date.now` kullanılıyor.
      title: title,
      date: date,
      status: status,
    };

    dispatch(addNewTask(task));
    Alert.alert('Başarılı', 'Görev eklendi!');
    setTitle('');
    setDate('');
    setStatus(statusTypes.INREVIEW); // Varsayılan durum.
  };

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
      <Text style={styles.label}>Task Status</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={status}
          onValueChange={(itemValue) => setStatus(itemValue)}
          style={{ height: 50, width: '100%', fontWeight:'800' }}
        >
          {Object.entries(statusTypes).map(([key, value]) => (
            <Picker.Item key={key} label={value} value={value} />
          ))}
        </Picker>
      </View>
      <Button onPress={saveTask} title="Kaydet" status="success" />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
    marginLeft:10
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
    marginLeft:10,
    width: '95%',
  },
});

export default AddTask;
 */
