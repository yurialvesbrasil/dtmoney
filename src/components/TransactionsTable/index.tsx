import { useEffect } from 'react';
import { TransactionsTableStyled } from "./styles";
import { api } from '../../services/api';

export function TransactionsTable() {
    
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, [])

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
                    <tr>
                        <td className="tabel-title">Desenvolvimento de websites</td>
                        <td className="deposit">R$500,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td className="tabel-title">Desenvolvimento de websites</td>
                        <td className="deposit">R$500,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td className="tabel-title">Desenvolvimento de websites</td>
                        <td className="withdraw">- R$500,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </TransactionsTableStyled>);
}