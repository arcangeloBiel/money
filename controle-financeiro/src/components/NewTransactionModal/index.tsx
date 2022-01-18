import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState, useContext } from "react";
import { UseTransactions } from "../../hooks/useTransactions";


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen,onRequestClose,}: NewTransactionModalProps) {

  const { createTransaction } = UseTransactions();
  
  const [title, setTitle] = useState("");
  const [amount, setAmout] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

 async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

  await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle('');
    setAmout(0);
    setCategory('');
    setType('deposit');
    onRequestClose()

  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>cadastrar transação</h2>
        <input type="text" placeholder="Tìtulo" value={title} onChange={event => setTitle(event.target.value)}/>

        <input type="number" placeholder="Valor" value={amount} onChange={event => setAmout(Number(event.target.value))}/>

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            isactiveColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            isactiveColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />
        
        <button type="submit">Cadastrar</button>


      </Container>
    </Modal>
  );
}
