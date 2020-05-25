import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(<App/>, document.getElementById('root'));
const Welcome = (props) =>{
    return <h1>Hello, {props.name}</h1>
} 

ReactDOM.render(<Welcome name="John"/>, document.getElementById('root'));
