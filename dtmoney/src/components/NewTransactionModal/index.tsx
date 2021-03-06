import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransaction';

import CloseImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';

import { NewTransactionModalContainer, RadioBox, TransactionTypeContainer } from './styles';


interface NewTransactionModalProps {
    isNewTransactionModalOpen: boolean;
    onCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({ isNewTransactionModalOpen, onCloseNewTransactionModal }: NewTransactionModalProps) {

    const { createTransaction } = useTransactions();

    const [typeTransaction, setTypeTransaction] = useState<'withdraw' | 'deposit'>('deposit');
    //Dados do formulário
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    function resetForm() {
        setTitle('');
        setValue(0);
        setCategory('');
        setTypeTransaction('deposit');
    }

    async function handleCreateNewTransaction(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        //Cadastra transações
        await createTransaction({
            title,
            amount: value,
            category,
            type: typeTransaction
        });

        resetForm() //Reseta o formulário
        onCloseNewTransactionModal()
    }

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
            <NewTransactionModalContainer onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder='Título'
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    type="number"
                    placeholder='Valor'
                    value={value}
                    onChange={(event) => setValue(Number(event.target.value))}
                />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setTypeTransaction('deposit')}
                        isActive={typeTransaction === 'deposit'}
                        activeColor='green'
                    >
                        <img src={IncomeImg} alt="Button entrer icon" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setTypeTransaction('withdraw')}
                        isActive={typeTransaction === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={OutcomeImg} alt="Button out icon" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input
                    placeholder='Categoria'
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </NewTransactionModalContainer>
        </Modal>
    )
}