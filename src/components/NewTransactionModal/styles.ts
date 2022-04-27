import styled from 'styled-components';
import { darken } from 'polished';



export const NewTransactionModalContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

        h2{
        color: var(--text-title);
        font - size: 1.5rem;
        margin - bottom: 1rem;
    }

        input{
            width: 100 %;
            padding: 0 1.5rem;
            height: 4rem;
            border-radius: 0.25rem;
            border: 1px solid var(--input-border);
            background: var(--input-background);

            font-weight: 400;
            font-size: 1rem;

            &::placeholder{
                color: var(--text-body);
            }
    }

    button[type = "submit"]{
        width: 100 %;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: none;
        font-size: 1rem;
        margin-top: 1rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: string;
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid var(--input-border);
    border-radius: 0.25rem;

    background: ${(props) => props.isActive ? props.activeColor : 'transparent'};
    
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 1.5rem;
    gap: 1rem;

    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.2, '#d7d7d7')}
    
    }    

    img{
        width: 1.5rem;
        height: 1.5rem;
    }
`;