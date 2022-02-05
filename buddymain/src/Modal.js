import React from 'react';
import './Modal.css';
import { db } from './firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  let emails = [];

  const getData = async() => { 
    const docRef = doc(db, "db", "subscribers");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      emails = docSnap.data()['email'];
      console.log(emails);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              {' '}
              &times;{' '}
            </button>
          </header>
          <main>{props.children}</main>
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