import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ExpenseProvider } from './src/contexts/ExpenseContext';
import HomeScreen from './src/screens/HomeScreen';
import AddExpenseScreen from './src/screens/AddExpenseScreen';
import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ExpenseProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#4CAF50' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Meus Gastos' }} 
          />
          <Stack.Screen 
            name="AddExpense" 
            component={AddExpenseScreen} 
            options={{ title: 'Novo Gasto' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpenseProvider>
  );
}