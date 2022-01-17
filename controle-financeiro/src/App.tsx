import { Dashboard } from "./components/Dashbord";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";

Modal.setAppElement('#root');

export function App() {

 //criando estado do modal
 //componenets esta alterando informações do componente pai ou filho, atraves do repasse de função
 const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =useState(false);

 function handleOpenNewTransactionModal() {
   setIsNewTransactionModalOpen(true);
 }

 function handleCloseNewTransactionModal() {
   setIsNewTransactionModalOpen(false);
 }

  return (
    <>
     <Header onOpenNewTranslationModal={handleOpenNewTransactionModal} />
     <Dashboard />

     <Modal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        >
            <h2>xabalauu</h2>
        </Modal>

      <GlobalStyle />
    </>
  );
}

