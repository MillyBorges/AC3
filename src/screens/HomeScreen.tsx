import { router } from 'expo-router';
import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ExpenseContext } from '../contexts/ExpenseContext';

export default function HomeScreen() {
  const { expenses, removeExpense, total } = useContext(ExpenseContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Total Gasto</Text>
        {}
        <Text style={styles.headerTotal}>R$ {(total || 0).toFixed(2)}</Text>
      </View>

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum gasto anotado. 💸</Text>}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemDesc}>{item.description}</Text>
              <Text style={styles.itemValue}>R$ {(item.value || 0).toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.deleteButton} onPress={() => removeExpense(item.id)}>
              <Text style={styles.deleteButtonText}>Apagar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => router.push('/add-expense')} 
      >
        <Text style={styles.fabText}>+ Adicionar Gasto</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#800080', padding: 20, alignItems: 'center', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, marginBottom: 15 },
  headerTitle: { color: '#dabcf3', fontSize: 16 },
  headerTotal: { color: '#FFF', fontSize: 32, fontWeight: 'bold', marginTop: 5 },
  listContainer: { paddingHorizontal: 15, paddingBottom: 80 },
  itemCard: { backgroundColor: '#FFF', padding: 15, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, elevation: 2 },
  itemInfo: { flex: 1 },
  itemDesc: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  itemValue: { fontSize: 14, color: '#666', marginTop: 4 },
  deleteButton: { backgroundColor: '#FF5252', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 6 },
  deleteButtonText: { color: '#FFF', fontWeight: 'bold', fontSize: 12 },
  emptyText: { textAlign: 'center', color: '#888', marginTop: 40, fontSize: 16 },
  fab: { position: 'absolute', bottom: 20, left: 20, right: 20, backgroundColor: '#800080', padding: 15, borderRadius: 10, alignItems: 'center', elevation: 4 },
  fabText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});