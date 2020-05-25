import React, { ReactComponent, useState } from 'react';

class StateUsage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(true);
        this.decrement = this.decrement.bind(true);
    }


    increment = () =>{
        this.setState({ counter: this.state.counter + 1 });
    }

    decrement = () => {
        if(this.state.counter <= 0){
            return;
        }
        this.setState({counter: this.state.counter - 1 });
    }

    render(){
        return (
            <div>
                <h3>Counter: { this.state.counter }</h3>
                <button onClick={ this.increment }>Increment</button>
                <button onClick={ this.decrement }>Decrement</button>
            </div>
        );
    }
}

export default StateUsage