import { SummaryStyled } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
    return (
        <SummaryStyled>
            <div>
                <header>
                    <h4>Entradas</h4>
                    <img src={incomeImg} alt="Icone que representa as entradas."></img>
                </header>
                <strong>R$1000,00</strong>
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