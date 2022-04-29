import { SummaryStyled } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {
    const transactions = useContext(TransactionsContext)

    return (
        <SummaryStyled>
            <div>
                <header>
                    <h4>Entradas</h4>
                    <img src={incomeImg} alt="Icone que representa as entradas."></img>
                </header>
                <strong>R$1.000,00</strong>
            </div>
            <div>
                <header>
                    <h4>Saídas</h4>
                    <img src={outcomeImg} alt="Icone que representa as saídas."></img>
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <h4>Saldo</h4>
                    <img src={totalImg} alt="Icone que representa o saldo."></img>
                </header>
                <strong>R$500,00</strong>
            </div>
        </SummaryStyled>
    );
}