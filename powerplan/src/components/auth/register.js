import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
// import { fireBase } from "../../config/firebaseConfig";
import { AuthContext } from '../../config/context';

class Register extends Component {
    state= {
        name: '',
        surname: '',
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    //do rozbudowy this.state.email, this.state.password
    
    render() {
        const { email, password } = this.state;
        return (
            <AuthContext.Consumer>
                {
                    (context) => {
                        return (
                            <div className="container">
                                <Form className="login-form" onSubmit={e => context.register(e, email, password)} >
                                    <h2>Welcome</h2>
                                    <h3>Create your account:</h3>
                                    <FormGroup>
                                        <Label>Name</Label>
                                        <Input type={'text'} id={'name'} onChange={this.handleChange} placeholder={'name'}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Surname</Label>
                                        <Input type={'text'} id={'surname'} onChange={this.handleChange} placeholder={'surname'}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>E-mail</Label>
                                        <Input type={'email'} id={'email'} onChange={this.handleChange} placeholder={'email'}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Password</Label>
                                        <Input type={'password'} id={'password'} onChange={this.handleChange}  placeholder={'password'}/>
                                    </FormGroup>
                                    <Button type={'submit'}>LOGIN</Button>
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
                        )
                    } 
                }
            </AuthContext.Consumer>
        );
    }
}

export default Register;
