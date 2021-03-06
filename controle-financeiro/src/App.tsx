import { Dashboard } from "./components/Dashbord";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import {  useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";


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
    <TransactionProvider >
    
     <Header onOpenNewTranslationModal={handleOpenNewTransactionModal} />
     <Dashboard />
     <NewTransactionModal 
     isOpen={isNewTransactionModalOpen}
     onRequestClose={handleCloseNewTransactionModal}
     />

      <GlobalStyle />
    </TransactionProvider>
  );
}

