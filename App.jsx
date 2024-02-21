import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
 const [task, setTask]= useState("");
  return (
<View style = {styles.container}>
  <View style={styles.form} >
    <TextInput
      placeholder="Digite uma nova tarefa"
      style={styles.inputLine}
     
      onChangeText={setTask}
      value={task}
    />

    <TouchableOpacity
    style={styles.button}
    >
      <Text style={styles.buttonText}  >Adicionar</Text>
    </TouchableOpacity>
  </View>
  <StatusBar style="auto" />
</View>
  )}

const styles = StyleSheet.create({
  container: {
padding:50,
  },
  
    form: {
      display: "flex",
      alignItems:"center"
    },
 inputLine:{
 
  
  padding: "10",
  width: "100%"

 },

 button: {
backgroundColor: "blue",
padding: 10,
borderRadius: 5,
 },

 buttonText: {
  color: "white"
 }
  
});
