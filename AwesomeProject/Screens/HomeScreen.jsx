import React, { useState } from 'react'
import ToDoForm from '../Components/ToDoForm';
import ToDoList from '../Components/ToDoList';
import MainLayout from '../layouts/MainLayout';

import {
    StyleSheet,
    Button,
} from 'react-native';

export default function HomeScreen({ navigation }) {
    const addTask = (taskText) => {
        setTask([...tasks, taskText]);
    };
    const [tasks, setTask] = useState([
        'Do laundry',
        'Walk dog'
    ]);
    return (
        <>
            <MainLayout>
                <ToDoList tasks={tasks}></ToDoList>
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />
                <ToDoForm addTask={addTask}></ToDoForm>

                
            </MainLayout>

        </>
    )
}