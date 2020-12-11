import React, {Component} from 'react';

export class Login extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className = "basecontainer">
            <div className = "header"> Login</div>
            <div className = "content">
                <div className ="form">
                    <div className = "formgroup">
                        <label htmlFor = "username"> Username</label>
                        <input type = "text" name ="username" placeholder = "username"/>
                    </div>
                    <div className = "formgroup">
                        <label htmlFor = "password"> Password</label>
                        <input type = "password" name ="password" placeholder = "password"/>
                    </div>

                </div>
            </div>
            <div className = "footer">
                <button type = "button" className = "btn">
                    Login
                </button>
            </div>
        </div>
    }
}