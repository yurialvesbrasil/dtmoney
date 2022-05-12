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

/*export type TransactionInput = {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}*/

//type TransactionInput = Pick<TransactionModel, 'title' | 'amount' | 'type' | 'category'>; 

type TransactionInput = Omit<TransactionModel, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
    children: ReactNode;
}

// Cria um novo tipo para o contexto
interface TransactionsContextData {
    transactions: TransactionModel[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<TransactionModel[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));
    }, [])

    //Função para inserir transações no banco de dados
    async function createTransaction(transaction: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transaction,
            createdAt: new Date().toISOString() // Insere a data atual junto com as informações do formulário
        });
        //Recupera a transação que foi inserida
        const { transaction: newTransaction } = response.data;
        //Atualiza lista de transações
        setTransactions([...transactions, newTransaction]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )

}