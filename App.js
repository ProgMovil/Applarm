import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScrPrincipal from './screens/ScrPrincipal';




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal"  >
        <Stack.Screen name = "Principal" component={ScrPrincipal} options={{ headerShown: false }} />
       </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  
});
