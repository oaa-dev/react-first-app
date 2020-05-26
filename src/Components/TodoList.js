import React, { useEffect, useState, useRef } from 'react';

const TodoList = () => {
    console.log("App Rendered");
    const [state, setState] = useState({
        todolist : [],
        updateRow :0,
        todo : '',
        update : '',
    });
    /* destructor */
    const {todolist, updateRow, todo, update} = state;

    const handleInputTodo = (e) =>{
        const {name, value} = e.target;

        setState({ ...state, [name]:value });
    }

    /* CREATE */
    const handleCreateTodo = () =>{
        if(todo == ''){ alert('Enter valid inputs!'); return; }

        const temp = todolist;
        temp.push({todo: todo, date: "06/26/1999"})
        
        setState({todo:'', todolist: temp});
    }

    /* DELETE */
    const removeTodoList = (index, e) => {

        if(e.target.innerText == 'Cancel'){
            setState({ ...state, updateRow:-1 });
        }else{
            const temp = todolist;
            temp.splice(index, 1);

            setState({todo:'', todolist: temp })
        }
    }
    
    /* UPDATE */
    const updateTodoList = (index, e) =>{
        if(e.target.innerText == 'Update'){
            setState({ ...state, updateRow:index });
        }else{
            const temp = todolist;
            temp[index]['todo'] = update;
            
            setState({ todolist: temp })
        }
    }

    useEffect(() => {
        console.log("render by use effect")
    }, [])
    
    return(
        <div>
            <h3>Todo List</h3>
            <input type="text" value={todo} name="todo" onChange={handleInputTodo} /><button onClick={handleCreateTodo}>Add</button>
            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Todo</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todolist.length ?
                            todolist.map((value, index)=>(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    { updateRow == index ? <td><input name="update" onChange={handleInputTodo} /></td> : <td>{value.todo}</td> }
                                    <td>{value.date}</td>
                                    <td>
                                        <button onClick={(e)=>updateTodoList(index, e)}>{ updateRow == index ? "Save":"Update" }</button>
                                        <button onClick={(e)=>removeTodoList(index, e)}>{ updateRow == index ? "Cancel":"Delete" }</button>
                                    </td>
                                </tr>
                            )) : <tr><td colSpan="4">No record found!</td></tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;


