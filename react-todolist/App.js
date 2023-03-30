import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from './screens/HomeScreen.js';
import ToDoScreen from './screens/TodoScreen.js';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component ={HomeScreen} options={{ headerShown:false}}/>
        <Stack.Screen name="ToDo" component ={ToDoScreen} options={{ headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  )
}

