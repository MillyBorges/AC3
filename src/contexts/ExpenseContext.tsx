import React, { createContext, ReactNode, useState } from 'react';
import { Expense } from '../types';

interface ExpenseContextData {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  removeExpense: (id: string) => void;
  total: number;
}

export const ExpenseContext = createContext<ExpenseContextData>({} as ExpenseContextData);

interface ExpenseProviderProps {
  children: ReactNode;
}

export const ExpenseProvider = ({ children }: ExpenseProviderProps) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  const removeExpense = (id: string) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  };

  const total = expenses.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, removeExpense, total }}>
      {children}
    </ExpenseContext.Provider>
  );
};