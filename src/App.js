import React from 'react'
import { Switch, Route } from 'react-router-dom';

/* Components */
import Comment from './Components/Comment';
import Clock from './Components/Clock';
import StateUsage from './Components/State';
import Counter from './Components/Counter';
import TodoList from './Components/TodoList';
import Handling_Event from './Components/Handling_Event';
import Home from './Components/Home';


class App extends React.Component{
    render(){
        return (
            <div className='app-main'>
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/todolist">
                        <TodoList/>
                    </Route>
                    <Route path="/clock">
                        <Clock/>
                    </Route>
                    <Route path="/comment">
                        <Comment/>
                    </Route>
                    <Route path="/state">
                        <StateUsage/>
                    </Route>
                    <Route path="/counter">
                        <Counter/>
                    </Route>
                    <Route path="/handling-event">
                        <Handling_Event />
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App