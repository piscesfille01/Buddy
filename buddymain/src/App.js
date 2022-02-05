import React, { useState } from 'react';
import './App.css';
import Input from './Input';
import Modal from './Modal';


function App() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <div className='header'>
      <h1>BUDDY!</h1>
      </div>
      <div className='buddy'>
        <h1>GET RECOMMENDATIONS</h1>
        <h1>FOR YOUR PSYCHOLOGY</h1>
        <h1>FROM BUDDY!</h1>
      </div>
      <div className='description'>
        <h1>BUDDY! IS AN EMAIL SUBSCRIPTION PROGRAM THAT SENDS </h1>
        <h1>PSYCHOLOGICAL RESOURCES TO HELP PEOPLE REGAIN PEACE OF MINDS</h1>
      </div>
      <button onClick={openModal} style={{float: 'right', marginRight: 130, marginTop: -180}} className="subbutton">
          SUBSCRIBE
      </button>
      <button style={{float: 'right', marginRight: 130, marginTop: -90,  }} className='checkbutton'>
        CHECK WHAT'S NEW!
      </button>
      
    <Modal open = {modalOpen} close = {closeModal} header = "Enter your email for subscription!">
    </Modal>
    </React.Fragment>    
  );
}

export default App;
