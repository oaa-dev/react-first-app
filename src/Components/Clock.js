import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);

        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(() => {
            this.setState({date: new Date()});
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
        return (
            <div>
                <h1>World Clock!</h1>
                <h3>It's {this.state.date.toLocaleTimeString() }.</h3>
            </div>
        );
    }
}

export default Clock;