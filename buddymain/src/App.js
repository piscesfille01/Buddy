import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';
import News from './components/News';
import { Link } from 'react-scroll';

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // Get Data
  const [books, setBooks] = useState([]);
  const searchPsychology = `https://www.googleapis.com/books/v1/volumes?q=psychology&orderBy=relevance&printType=books&projection=lite`;
  const searchMind = `https://www.googleapis.com/books/v1/volumes?q=mind&orderBy=relevance&printType=books&projection=lite`
  const searchMental = `https://www.googleapis.com/books/v1/volumes?q=mental&orderBy=relevance&printType=books&projection=lite`

  const [quotes, setQuotes] = useState([]);
  const searchQuote =  `https://type.fit/api/quotes`;

  function getAllData(){
      fetch(searchPsychology)
      .then(response => {
          if (response.ok) {
              console.log(response.status);
              return response.json();
          } else {
              if (response.status === 404) {
                  console.log("There seems to be an error");
              } else {
                  console.log("Something is wrong");
              }
          }
      })
      .then(result => {
          // select the books
          const element = result.items[Math.floor(Math.random()*10)];

          let item = {}; 

          item['title'] = element.volumeInfo.title;
          item['author'] = element.volumeInfo.authors[0];
          item['description'] = element.volumeInfo.description;
          item['image'] = element.volumeInfo.imageLinks.thumbnail;
          
          books.push(item);
          setBooks(books);
      }).then(
        fetch(searchMental)
        .then(response => {
            if (response.ok) {
                console.log(response.status);
                return response.json();
            } else {
                if (response.status === 404) {
                    console.log("There seems to be an error");
                } else {
                    console.log("Something is wrong");
                }
            }
        })
        .then(result => {
            // select the books
            const element = result.items[Math.floor(Math.random()*10)];

            let item = {}; 

            item['title'] = element.volumeInfo.title;
            item['author'] = element.volumeInfo.authors[0];
            item['description'] = element.volumeInfo.description;
            item['image'] = element.volumeInfo.imageLinks.thumbnail;
            
            books.push(item);
            setBooks(books);
        }).then(
          fetch(searchMind)
          .then(response => {
              if (response.ok) {
                  console.log(response.status);
                  return response.json();
              } else {
                  if (response.status === 404) {
                      console.log("There seems to be an error");
                  } else {
                      console.log("Something is wrong");
                  }
              }
          })
          .then(result => {
              // select the books
              const element = result.items[Math.floor(Math.random()*10)];

              let item = {}; 

              item['title'] = element.volumeInfo.title;
              item['author'] = element.volumeInfo.authors[0];
              item['description'] = element.volumeInfo.description;
              item['image'] = element.volumeInfo.imageLinks.thumbnail;
              
              books.push(item);
              setBooks(books);
              setNewsOpen(true);
          }).then(
            fetch(searchQuote)
            .then(response => {
              if (response.ok) {
                  console.log(response.status);
                  return response.json();
              } else {
                  if (response.status === 404) {
                      console.log("There seems to be an error");
                  } else {
                      console.log("Something is wrong");
                  }
              }
            })
            .then(result => {
              for (let i = 0; i < 3; i++) {
                quotes.push(result[Math.floor(Math.random()*10)]);
              }
              setQuotes(quotes);
            })
          )
        )
      )

      
  };

  return (
    <React.Fragment>
      <div className='headerr'>
      <h1 >BUDDY!</h1>
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
      <Link to='bottom' smooth = {true} >
        <button className='whosmade' style={{float: 'right', marginRight: 130, marginTop: -230}}>WHO'S MADE?</button>
      </Link>
      <button onClick={openModal} style={{float: 'right', marginRight: 130, marginTop: -180}} className="subbutton">
          SUBSCRIBE
      </button>
      <button onClick={getAllData} style={{float: 'right', marginRight: 130, marginTop: -90,  }} className='checkbutton'>
        CHECK WHAT'S NEW!
      </button>
      <Modal open = {modalOpen} close = {closeModal} header = "Enter your email for subscription!">
      </Modal>
      <News showNews={newsOpen} books={books} quotes={quotes}></News>
      <button className='bottom'>
        <h1>BUDDY! is made and developed from; Eunchae Seong and Ellie Kang from University of Toronto, CA</h1>
        <h1>💻</h1>
        <h1>For contact, </h1>
        <h1>Euncahe Seong: https://www.linkedin.com/in/eunchae-seong-551312212/</h1>
        <h1>Ellie Kang: https://www.linkedin.com/in/ellie-kang-4a652719a/</h1>
      </button>
    </React.Fragment>    
  );
}

export default App;
