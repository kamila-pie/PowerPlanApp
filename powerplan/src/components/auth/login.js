import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {FacebookLoginButton, GoogleLoginButton} from "react-social-login-buttons";

class Login extends Component {
    state= {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <Form className="login-form" onSubmit={this.handleSubmit} >
                    <h2>Welcome Back</h2>
                    <FormGroup>
                        <Label>E-mail</Label>
                        <Input type={'email'} id={'email'} onChange={this.handleChange} placeholder={'email'}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type={'password'} id={'password'} onChange={this.handleChange}  placeholder={'password'}/>
                    </FormGroup>
                    <Button>LOGIN</Button>
                    <div className={'continue'}>or continue with your social account</div>
                    <FacebookLoginButton/>
                    <GoogleLoginButton/>
                    <div>
                        <a href={'/login'}>Sign In</a>
                        <span> | </span>
                        <a href={'/'}>Forgot Password</a>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Login;
