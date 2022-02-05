import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const News = (props) => {
    const books = props.books;
    const quotes = props.quotes;
    const showNews = props.showNews;
    
    if (showNews === false) {
        return null;
    }

    return (
        <div>
            <h1>Check this week's news!</h1>
            <h2>Books</h2>
            <div>
                {books.map((item) => 
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.author}</p>
                        <p>{item.description}</p>
                    </div>
                )}
            </div>
            <h2>Quotes</h2>
            <div>
                {quotes.map((item) => 
                    <div>
                        <h3>{item.text}</h3>
                        <p>{item.author}</p>
                    </div>
                )}
            </div>
            <h2>Videos</h2>
            <div>
                <ReactPlayer
                    url="https://youtu.be/inpok4MKVLM">
                </ReactPlayer>
            </div>
        </div>
    )
}

export default News;