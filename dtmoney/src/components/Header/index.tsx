import logoImg from '../../assets/logo.svg';
import { HeaderContentStyled, HeaderStyled } from './styles';

interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
    const buttonLabel = "Nova Transação"

    return (
        <HeaderStyled>
            <HeaderContentStyled>
                <img src={logoImg} alt="dt money logo" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    {buttonLabel}
                </button>
                  
            </HeaderContentStyled>
        </HeaderStyled>
    )
}