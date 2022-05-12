import { SummaryStyled } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {
    const { transactions } = useContext(TransactionsContext)

    //Calcula o total de depositos
    /*const totalDepositos = transactions.reduce((total, transaction) => {
        if (transaction.type === 'deposit') {
            return total + transaction.amount;
        }
        return total;
    }, 0);*/


    //Calcula o total de despesas
    /*const totalDespesas = transactions.reduce((total, transaction) => {
        if (transaction.type === 'withdraw') {
            return total + transaction.amount;
        }
        return total;
    }, 0);*/

    //Calcula despesas e depositos
    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposit: 0,
        withdraw: 0,
        total: 0
    });

    return (
        <SummaryStyled>
            <div>
                <header>
                    <h4>Entradas</h4>
                    <img src={incomeImg} alt="Icone que representa as entradas."></img>
                </header>
                <strong className='deposit'>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposit)
                }</strong>
            </div>
            <div>
                <header>
                    <h4>Saídas</h4>
                    <img src={outcomeImg} alt="Icone que representa as saídas."></img>
                </header>
                <strong className='withdraw'>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraw * -1)
                }</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <h4>Saldo</h4>
                    <img src={totalImg} alt="Icone que representa o saldo."></img>
                </header>
                <strong>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)
                }</strong>
            </div>
        </SummaryStyled>
    );
}