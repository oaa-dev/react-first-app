import React, { ReactComponent } from 'react';

class StateUsage extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            name:'OAA Dev',
            age:18,
            sex:'Male',
            isToggleOn:true,
        }
    }

    componentDidMount(){
        this.setState((state, props)=>{
            return { name:`${props.name} ${state.name}` };
        });

    }

    handleClick = () =>{
        this.setState(state => ({
            isToggleOn : !state.isToggleOn,
        }));
    }

    render(){
        return (
            <div>
                <h3>Name: { this.state.name }</h3>
                <h3>Age: { this.state.age }</h3>
                <h3>Sex: { this.state.sex }</h3>
            </div>
        );
    }
}

export default StateUsage