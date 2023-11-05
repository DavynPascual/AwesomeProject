
import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = () => {
  return (
<View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={newTask}
          onChangeText={setNewTask}
        />
        <Button title="Add" onPress={handleAddTask} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexGrow: 1,
    marginRight: 10,
    padding: 5,
  },
});

export default ToDoForm;
