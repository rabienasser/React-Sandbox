import React from 'react';

import './sign-in.style.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

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
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    handleChange={this.handleChange} 
                    label="email"
                    required/>

                    <FormInput 
                    type="password" 
                    name="password" 
                    value={password} 
                    handleChange={this.handleChange} 
                    label="password"
                    required/>

                    <div className="buttons">
                    <CustomButton type="submit" value="Submit">Sign In</CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;