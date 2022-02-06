import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import '../css/News.css'

const News = (props) => {
    const books = props.books;
    const quotes = props.quotes;
    const showNews = props.showNews;
    
    if (showNews === false) {
        return null;
    }

    return (
        <div className='newss'>
            <button style={{border: 0}} className='header'>CHECK THIS WEEK'S NEWS! 📰 </button>
            {/* <h1 className='header'>CHECK THIS WEEK'S NEWS! 📰 </h1> */}
            <h2 className='bookheader'>BOOKS 📚</h2>
            <div className='bookdescription'>
                {books.map((item) => 
                    <div>
                        <h3>😊 {item.title} by {item.author}</h3>
                        <p className='des'>{item.description}</p>
                    </div>
                )}
            </div>
            <h2 className='qouteheader'> QUOTES 📜</h2>
            <div className='qoutedescription'>
                {quotes.map((item) => 
                    <div>
                        <h3>{item.text}</h3>
                        <p>✨ {item.author}</p>
                    </div>
                )}
            </div>
            <h2 className='yogaheader'>VIDEO 🧘</h2>
            <div>
                <ReactPlayer className='yogadescription'
                    url="https://youtu.be/inpok4MKVLM">
                </ReactPlayer>
            </div>
        </div>
    )
}

export default News;