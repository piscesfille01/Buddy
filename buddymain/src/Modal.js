import React, { useState } from 'react';
import './Modal.css';
import { db } from './firebase/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { send } from 'emailjs-com';

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
      
      await setDoc(docRef, {
        'email': emails
      });

      const newEmail = {'from_name': 'Buddy!', 'toNewEmail': email};

      // Send a confirmation email
      send(
        'service_1top34t',
        'contact_form',
        newEmail,
        'user_VUH2TYA87M36PrsrepyPu'
      ).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }).catch((err) => {
        console.log('Failed', err);
      });

      setEmail('');
      
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
              onClick={ addNewData }
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