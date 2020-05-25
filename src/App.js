import React, { ReactComponent } from 'react'
import Comment from './Comment';
import Clock from './Clock';
import StateUsage from './State';

class App  extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            comment: {
                date: new Date(),
                text: 'I hope you enjoy learning React!',
                author: {
                    name: 'Hello Kitty',
                    avatarUrl: 'https://placekitten.com/g/64/64',
                }
            }
        };
    }

    render(){
        return (
            <div>
                <Clock />
                <hr/>
                <h3>Comment 1</h3>
                <Comment 
                    author={this.state.comment.author}
                    text={this.state.comment.text}
                    date={this.state.comment.date}
                />
                <hr/>
                <StateUsage name="JOhn"/>
            </div>
        );
    }
}

export default App