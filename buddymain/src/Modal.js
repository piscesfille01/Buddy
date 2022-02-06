import React, { useState } from 'react';
import './Modal.css';
import { db } from './firebase/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const Modal = (props) => {
  const { open, close, header } = props;
  const [email, setEmail] = useState('');

  let emails = [];

  const addNewData = async() => { 
    const docRef = doc(db, "db", "subscribers");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      emails = docSnap.data()['email'];
      emails.push(email);
      setEmail('');
      await setDoc(docRef, {
        'email': emails
      });
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  
  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              {' '}
              {/* &times;{' '} */}
            </button>
          </header>
          <main>
            <input 
              id="email-input" className='emailinput'
              type='text' 
              placeholder='Enter your email address' 
              value={email}
              onChange={e => setEmail(e.target.value)}>
              </input>
            <button 
              className='submitb'
              id="submit-button"
              onSubmit={ addNewData }
            >SUBMIT
            </button>
          </main>
          <footer>
            <button className="close" onClick={close}>
              {' '}
              close{' '}
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;