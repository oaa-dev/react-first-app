import React from 'react';
import { useHistory } from 'react-router-dom';


const Home = () => {
    const history = useHistory();

    const handleOnClickTodo = () => {
        history.push('/todolist');
    }
    const handleOnClickClock = () => {
        history.push('/clock');
    }
    const handleOnClickComment = () => {
        history.push('/comment');
    }
    const handleOnClickState = () => {
        history.push('/state');
    }
    const handleOnClickCounter = () => {
        history.push('/counter');
    }

    return(
        <div className="home-main">
            <h1>OAA, Development</h1>
            <button onClick={handleOnClickTodo}>Todo List</button><br/>
            <button onClick={handleOnClickClock}>Clock</button><br/>
            <button onClick={handleOnClickComment}>Comment</button><br/>
            <button onClick={handleOnClickState}>State Example</button><br/>
            <button onClick={handleOnClickCounter}>Counter Example</button><br/>
        </div>
    );
}

export default Home;