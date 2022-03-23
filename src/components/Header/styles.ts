import styled from 'styled-components';
import { Header } from './index';

export const HeaderStyled = styled.header`
    background: var(--blue);
`;

export const HeaderContentStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  /* top, right and left, bottom */
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Button right and top*/
  button {
      font-size: 1rem;
      color: #FFF;
      background: var(--blue-light);
      border: unset;
      padding: 0rem 2rem;
      border-radius: 0.25rem;
      height: 3rem;

      transition: filter 0.2s;
      
      &:hover {
        filter: brightness(0.9);
      }
  }
`;