import Modal from 'react-modal';
import { NewTransactionModalContainer, TransactionTypeContainer } from './styles';
import CloseImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';

interface NewTransactionModalProps {
    isNewTransactionModalOpen: boolean;
    onCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({ isNewTransactionModalOpen, onCloseNewTransactionModal }: NewTransactionModalProps) {
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
                    <button type="button">
                        <img src={IncomeImg} alt="Button entrer icon" />
                        <span>Entrada</span>
                    </button>
                    <button type="button">
                        <img src={OutcomeImg} alt="Button out icon" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>
                <input placeholder='Categoria' />
                <button type="submit">Cadastrar</button>
            </NewTransactionModalContainer>
        </Modal>
    )
}