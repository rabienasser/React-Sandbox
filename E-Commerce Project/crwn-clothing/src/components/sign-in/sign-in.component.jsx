import React from 'react';

import './sign-in.style.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: '', password: '' })  //set inputs to blank when SUBMIT is pressed
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        const { email, password } = this.state

        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" value={email} onChange={this.handleChange} required/>
                    <label>Email</label>
                    <input type="password" name="password" value={password} onChange={this.handleChange} required/>
                    <label>Password</label>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SignIn;