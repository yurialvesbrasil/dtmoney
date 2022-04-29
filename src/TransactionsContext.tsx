import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

export type TransactionModel = {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<TransactionModel[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<TransactionModel[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));
    }, [])

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )

}