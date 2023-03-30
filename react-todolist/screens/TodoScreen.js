import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from "@expo/vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native';

export default function ToDoScreen() {

    const[todoInput, setTodoInput]=useState("");
    const[todos,setTodos]=useState([
    {
        text:"premier todo",
        id:"1"
    },
    {
        text:"deuxième todo",
        id:"2"
    }
    ]);
    const handleAddTodo=()=>{
    if(todoInput.length > 1){
        setTodos([...todos, {text: todoInput, id: Date.now().toString()}])
        setTodoInput("");
    }else return;
    }
    const handleDeleteTodo=(id)=>{
        setTodos((todos) =>{
        return todos.filter((todo) => todo.id != id);
    })
    }
    
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.backBtn} onPress={()=> navigation.navigate("Home")}>
            <Text>Back</Text>
          </TouchableOpacity>
        {/* Header */}
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Hello world</Text>
        </View>
        {/* Form */}
        <View style={styles.formContainer}>
            <TextInput placeholder='Add todo' value={todoInput} onChangeText={value => setTodoInput(value)} style={styles.formInput}/>
            <TouchableOpacity onPress={handleAddTodo}>
            <Text>ADD TODO</Text>
          </TouchableOpacity>
        </View>
        {/* List */}
        <ScrollView>
          {todos.map((todo)=>(
            <View key={todo.id} style={styles.itemContainer} >
              <Text style={styles.itemText}>{todo.text}</Text>
              <TouchableOpacity onPress={()=>handleDeleteTodo(todo.id)}>
                <Icon name="trash" size={16}/>
  
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingTop:40,
      flex : 1,
    },
    headerContainer:{
      height: 70,
      backgroundColor: "lemonchiffon",
      justifyContent:"center",
      alignItems:"center"
    },
    headerTitle:{
      color:"lightblue",
      fontSize:24,
      fontWeight:800,
    },
    formContainer:{
      margin:12,
      flexDirection:"row",
    },
    formInput:{
      flex:1,
    },
    itemContainer:{
      flexDirection:"row",
      marginBottom:6,
      marginTop:12,
      marginLeft:20,
      marginRight:20,
      marginBottom:10,
    },
    itemText:{
      flex:1,
    },
    backBtn:{
      position:'absolute',
      top:50,
      left:10,
      zIndex:2,
    }
  
  
  });
