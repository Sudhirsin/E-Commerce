// import React from 'react'

// const Login = () => {
//     return (
//         <div>
//             Men Page
//         </div>
//     )
// }

// export default Login;



import React from 'react';
import {Link} from 'react-router-dom'
import ReactDOM from 'react-dom';


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : '',
            password : ''
        }
    }

    render(){
        console.log(this.state)
        return (
            <div className="container">
                <div className="row p-4">
                    <div className="col-6 p-5 bg-light border border-dark rounded mx-auto">
                        {/* form */}
                        <h3 className="font-weight-bold pb-4">Sign in</h3>
                        {/* <form> */}
                            <div className="form-group">
                                <label><h6 className="font-weight-bold">Username or Email Address</h6></label>
                                <input onChange={this.handleChange} name="username" type="text" className="form-control" id="username"/>
                            </div> 
                            <div className="form-group">
                                <label><h6 className="font-weight-bold">Password</h6></label>
                                <input onChange={this.handleChange} type="passsword" name="password" className="form-control" id="username"/>
                            </div>
                            <div className="form-group">
                                <Link to="/cart">
                                    <button onClick={this.props.onLogin} className="btn text-center btn-primary px-5"><small className="font-weight-bold">Sign In</small></button>
                                </Link>
                            </div>
                        {/* </form> */}
                    </div>
                    <div className="col-4">
                        <div id='show'>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;