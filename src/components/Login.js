import React from 'react'
import { withRouter } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    login = () => {
        let details = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(details);
    }

    render() {
        return(
            <div className="containerd login">
                <div className="row">
                    <div className="col-md-5 col-md-offest-4">
                    <div id="first">
                        <div className="myform form">
                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1>Login</h1>
                                </div> 
                            </div>
                            <form action="" method="post" name="login">
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" id="password"  className="form-control" aria-describedby="emailHelp" placeholder="Password" />
                                </div>
                                
                                <div className="col-md-12 text-center ">
                                    <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="login-or">
                                        <hr className="hr-or" />
                                        <span className="span-or">ili</span>
                                    </div>
                                    <div className="form-group">
                                        <p className="text-center">Zaboravili ste lozinku? <a href="/login" id="signup">Kliknite ovdje</a></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)