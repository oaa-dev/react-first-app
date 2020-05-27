import React, { useState } from 'react';

/* Style */
import '../Styles/Login.css'

const App = () => {

    const [state, setState] = useState({
        validAccount :[
            {
                username:'admin@admin.com',
                password:'secret123'
            },{
                username:'admin2@admin.com',
                password:'secret123'
            }
        ],
        username:'',
        password:'',
        error: []
    });

    const {username, password, validAccount, error} = state;
    
    const handleInput = (e) => {
        const {name, value} = e.target;

        setState({ ...state, [name]: value});
    }

    const validate = () => {
        let err = [];
        if(username === ""){
            err.push({errUsername:true });
        }if(password === ""){
            err.push({errPassword:true });
        }

        setState({...state, error: err});
    }

    const login = () => {
        
        /* validate data */
        validate()

        const user = validAccount.find((value, index) =>{
            return value.username == username && value.password == password 
        });

        const message = (user) ? 'WELCOME' : 'Incorrect username and password';

        alert(message)
    }

    return (
        <div className="app-main">
            <div className="form">
                <div className="form-heading">
                    <h2 className="form-title">SIGN UP</h2>
                </div>
                <div className="form-content">
                    <div className="form-group">
                        <label>Username :</label>
                        <input value={username} name="username" onChange={handleInput} />
                        { error.find((value)=>{ return value.errUsername; }) ? <p className="error">*Please input valid data</p> : '' }
                    </div>
                    <div className="form-group">
                        <label>Password :</label>
                        <input value={password} name="password" onChange={handleInput} />
                        { error.find((value)=>{ return value.errPassword; }) ? <p className="error">*Please input valid data</p> : '' }
                    </div>
                </div>
                <div className="form-footer">
                    <button onClick={login}>LOGIN</button><button>CANCEL</button>
                </div>
            </div>
        </div>
    );
}

export default App