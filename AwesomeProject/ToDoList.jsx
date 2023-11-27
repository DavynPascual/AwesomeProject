
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Task from './Task';

const ToDoList = ({ tasks }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <ScrollView style={styles.scrollView}>
        {tasks.map((task, index) => (
          <Task key={index} text={task} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    width: '100%',
  },
});

export default ToDoList;
