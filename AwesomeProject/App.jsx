
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
} from 'react-native';

import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
    const [tasks, setTasks] = React.useState([
        { id: 1, title: 'Do laundry', completed: true },
        { id: 2, title: 'Go to gym', completed: false },
        { id: 3, title: 'Walk dog', completed: true },
    ]);

    const handleAddTask = (newTask) => {
        const newTaskObject = {
            id: tasks.length + 1,
            title: newTask.trim(),
            completed: false,
        };

        setTasks([...tasks, newTaskObject]);
    };

    const handleToggleTask = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }

            return task;
        });

        setTasks(updatedTasks);
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <ToDoList tasks={tasks} handleToggleTask={handleToggleTask} />
            </ScrollView>
            <ToDoForm handleAddTask={handleAddTask} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});

export default App;
    marginRight: 10,
  },
});

export default App;
