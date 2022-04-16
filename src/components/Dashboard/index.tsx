import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { DashboardStyled } from "./styles";

export function Dashboard() {
    return (
        <DashboardStyled>
            <Summary />
            <TransactionsTable />
        </DashboardStyled>
    );
}