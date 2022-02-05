import React from 'react';

const Books = (props) => {

    return (
        <div>
            <h2>This Week's Books</h2>
            <div>
                { getBookSection() }
            </div>
        </div>
    )
}

export default Books;