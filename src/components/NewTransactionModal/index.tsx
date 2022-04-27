import Modal from 'react-modal';
import { NewTransactionModalContainer, RadioBox, TransactionTypeContainer } from './styles';
import CloseImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
    isNewTransactionModalOpen: boolean;
    onCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({ isNewTransactionModalOpen, onCloseNewTransactionModal }: NewTransactionModalProps) {
    const [typeTransaction, setTypeTransaction] = useState<'withdraw' | 'deposit'>('deposit');

    return (
        <Modal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={onCloseNewTransactionModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onCloseNewTransactionModal} className="react-modal-close">
                <img src={CloseImg} alt="Close Modal" />
            </button>
            <NewTransactionModalContainer>
                <h2>Cadastrar transação</h2>
                <input placeholder='Título' />
                <input type="number" placeholder='Valor' />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setTypeTransaction('deposit')}
                        isActive={typeTransaction === 'deposit'}
                        activeColor="#12A45422"
                    >
                        <img src={IncomeImg} alt="Button entrer icon" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setTypeTransaction('withdraw')}
                        isActive={typeTransaction === 'withdraw'}
                        activeColor="#E52E4D22"
                    >
                        <img src={OutcomeImg} alt="Button out icon" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input placeholder='Categoria' />
                <button type="submit">Cadastrar</button>
            </NewTransactionModalContainer>
        </Modal>
    )
}