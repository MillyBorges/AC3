import { router } from 'expo-router';
import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ExpenseContext } from '../contexts/ExpenseContext';

export default function AddExpenseScreen() {
  const { addExpense } = useContext(ExpenseContext);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSave = () => {
    const numericValue = parseFloat(value.replace(',', '.'));
    if (description.trim() === '') {
      setError('A descrição não pode ficar vazia.');
      return;
    }
    if (isNaN(numericValue) || numericValue <= 0) {
      setError('Insira um valor numérico maior que zero.');
      return;
    }
    setError('');
    addExpense({ id: Date.now().toString(), description: description.trim(), value: numericValue });
    
    router.back(); 
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>O que você gastou?</Text>
        <TextInput style={styles.input} placeholder="Ex: Almoço..." value={description} onChangeText={setDescription} />
        <Text style={styles.label}>Valor (R$)</Text>
        <TextInput style={styles.input} placeholder="Ex: 25.50" keyboardType="numeric" value={value} onChangeText={setValue} />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar Gasto</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  formContainer: { padding: 20 },
  label: { fontSize: 16, color: '#333', marginBottom: 8, fontWeight: 'bold' },
  input: { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#ddd', padding: 12, borderRadius: 8, fontSize: 16, marginBottom: 15 },
  saveButton: { backgroundColor: '#800080', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  saveButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  errorText: { color: '#FF5252', fontSize: 14, marginBottom: 15, fontWeight: 'bold' },
});