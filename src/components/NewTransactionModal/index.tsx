import Modal from 'react-modal';
import { NewTransactionModalContainer } from './styles';
import CloseImg from '../../assets/close.svg';

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
                <input placeholder='Categoria' />
                <button type="submit">Cadastrar</button>
            </NewTransactionModalContainer>
        </Modal>
    )
}