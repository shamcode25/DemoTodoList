import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, Keyboard, KeyboardAvoidingView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Task from "./components/Task";
import { StyleSheet, Text, View, SafeAreaView, TouchableWithoutFeedbackBase, TouchableHighlight, TouchableNativeFeedback, Platform } from 'react-native';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, settaskItems] = useState([]);


  const handleAddTask = () => {
    Keyboard.dismiss();
    settaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    settaskItems(itemsCopy);
  }


  return (
    <View style={styles.container}>
      {/* Today's task*/}
      <View style={styles.taskwrapper}>
        <Text style={styles.sectionTitle}> Today's Task </Text>


        <View style={styles.items}>
          {/*This is where all the task will go*/}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
          {/*<Task text={"Task 1"} />
          <Task text={"Task 2"} />*/}
        </View>
      </View>

      {/*Write a task component*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={"Write a Task"} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },

  taskwrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,

  },

  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

  },


  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "C0C0C0",
    borderWidth: 1,
    width: 300,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
