import React from 'react';
import './Tweet.css';

const Tweet = ({username, name, date, message}) => {
return (
    <div classname="tweet">
        <h3> @{username} </h3>
        <h4> {name} </h4>
        <p> {date} </p>
        <p> {message}  </p>
    </div>
);

};

export default Tweet;