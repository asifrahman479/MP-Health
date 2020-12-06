import React, {Component} from 'react';

export class DocRegister extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className = "basecontainer">
            <div className = "header"> Register</div>
            <div className = "content">
                <div className ="form">
                    <div className = "formgroup">
                        <label htmlFor = "username"> Username</label>
                        <input type = "text" name ="username" placeholder = "username"/>
                    </div>
                    <div className = "formgroup">
                        <label htmlFor = "email"> Email</label>
                        <input type = "email" name ="email" placeholder = "email"/>
                    </div>
                    <div className = "formgroup">
                        <label htmlFor = "clinic"> Clinic</label>
                        <input type = "text" name ="clinic" placeholder = "clinic"/>
                    </div>
                    <div className = "formgroup">
                        <label htmlFor = "password"> Password</label>
                        <input type = "password" name ="password" placeholder = "password"/>
                    </div>

                </div>
            </div>
            <div className = "footer">
                <button type = "button" className = "btn">
                    Register
                </button>
            </div>
        </div>
    }
}