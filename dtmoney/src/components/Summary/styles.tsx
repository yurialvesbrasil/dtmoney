import styled from "styled-components";

export const SummaryStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 1fr 1fr 1fr*/
    gap: 2rem;
    margin-top: -8rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong { /* o padrão é display: inline */
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        }

        &.highlight-background { /* A div que tiver a classe highlight-background*/
            background: var(--green);
            color: #FFF;
        }
    }
`;