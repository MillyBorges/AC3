export interface Expense {
  id: string;
  description: string;
  value: number;
}

export type RootStackParamList = {
  Home: undefined;
  AddExpense: undefined;
};