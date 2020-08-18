import React from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from "react-social-login-buttons";


const Login = () => {
    return (
        <Form className="login-form">
            <h2>Welcome</h2>
            <FormGroup>
                <Label>E-mail</Label>
                <Input type={'email'} placeholder={'email'}/>
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type={'password'} placeholder={'password'}/>
            </FormGroup>
            <Button>Log in</Button>
            <div>or continue with your social account</div>
            <FacebookLoginButton/>
            <div>
                <a href={'/signUp'}>Sign Up</a>
                <span> | </span>
                <a href={'/signUp'}>Forgot Password</a>
            </div>
        </Form>
    );
}

export default Login;
