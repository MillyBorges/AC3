import { ExpenseProvider } from '@/src/contexts/ExpenseContext';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <ExpenseProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Caderneta de Gastos' }} />
        <Stack.Screen name="add-expense" options={{ title: 'Novo Gasto' }} />
      </Stack>
    </ExpenseProvider>
  );
}