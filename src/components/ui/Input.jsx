import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/colors';

const Input = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} </Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: ThemeColors.black,
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: ThemeColors.gray,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: ThemeColors.input,
    borderRadius: 5,
    paddingVertical: 15,
  },
});
