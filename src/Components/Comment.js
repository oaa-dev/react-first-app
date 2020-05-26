import React from 'react';

const Avatar = (props) => {
    return ( 
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

const UserInfo = (props) =>{
    return (
        <div className="UserInfo">
            <Avatar user= {props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}
    
const formatDate = (date) =>{
    return date.toLocaleDateString();
}

const Comment = (props) => {
    const {author, text, date} = props.content;
    return (
        <div className="Comment">
            <UserInfo user = {author}/>
            <div className="Comment-text">{text}</div>
            <div className="Comment-date">{formatDate(date)}</div>
        </div>
    );
}

class Main extends React.Component {
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
            <div className="main">
                <Comment content = {this.state.comment} />
            </div>
        );
    }
}

export default Main
