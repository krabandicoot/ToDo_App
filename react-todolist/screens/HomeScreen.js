import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import ToDoScreen from "./TodoScreen";


export default function HomeScreen(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>HomeScreen</Text>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("ToDo")}>
                <Text style={styles.buttonText}>Go to my Todos</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent:"space-evenly",
        alignItems:"center",
    },
    title:{
        fontSize:24,
        fontWeight:800
    },
    button:{
        fontSize:24,
        padding:5,
        paddingHorizontal:12,
        borderRadius:8,
        backgroundColor:"lemonchiffon"
    },
    buttonText:{
        fontSize:24,
        color:"lightblue",
        fontWeight:800
    }

});