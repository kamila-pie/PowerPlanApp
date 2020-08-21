import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { fireBase } from '../../config/firebaseConfig';
import { AuthContext } from "../../config/context";


class Login extends Component {

    state = {
        email: '',
        password: ''
    };

//login function
    login = (e) => {
        e.preventDefault();
        fireBase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((err) => {
                console.log(err);
                console.log("Błędny email lub hasło");
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { email, password } = this.state;
        return (
            <AuthContext.Consumer>
                {
                    (context) => {
                        return (
                            <div className="container">
                                <Form className="login-form" onSubmit={e => context.logIn(e, email, password)} >
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
                        )
                    }
                }

            </AuthContext.Consumer>
        );
    }
}


export default Login;
