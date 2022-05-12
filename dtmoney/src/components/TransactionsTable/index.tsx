import { TransactionsTableStyled } from "./styles";
import { useTransactions } from '../../hooks/useTransaction';

export function TransactionsTable() {

    //Recupar dados do Context usando hooks
    const { transactions } = useTransactions();

    return (
        <TransactionsTableStyled>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td className="tabel-title">{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format((transaction.type == 'deposit') ? transaction.amount : transaction.amount * -1)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
                                </td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </TransactionsTableStyled>);
}