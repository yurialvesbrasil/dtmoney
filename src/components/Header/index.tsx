import logoImg from '../../assets/logo.svg';
import { HeaderContentStyled, HeaderStyled } from './styles';

export function Header() {

    const buttonLabel = "Nova Transação"
    return (
        <HeaderStyled>
            <HeaderContentStyled>
                <img src={logoImg} alt="dt money logo" />
                <button type="button">
                    {buttonLabel}
                </button>
            </HeaderContentStyled>
        </HeaderStyled>
    )
}