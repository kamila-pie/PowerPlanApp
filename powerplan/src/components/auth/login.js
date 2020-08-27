import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { fireBase } from '../../config/firebaseConfig';
import history from "../../config/history";


class Login extends Component {

    state = {
        email: '',
        password: ''
    };

//login function
    login = (e) => {
        e.preventDefault();
        fireBase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                console.log('jesteś zalogowany');
                history.push('/dashboard');
            })
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
        return (
            <div className="containerForm flip-in-ver-right">
                <Form className="login-form " onSubmit={e => this.login(e)} >
                    <h2>Welcome Back</h2>
                    <FormGroup>
                        <Label>E-mail</Label>
                        <Input type={'email'} id={'email'} onChange={this.handleChange} placeholder={'email'} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type={'password'} id={'password'} onChange={this.handleChange}  placeholder={'password'} required/>
                    </FormGroup>
                    <Button>LOGIN</Button>
                    {/*<div className={'continue'}>or continue with your social account</div>*/}
                    {/*<FacebookLoginButton/>*/}
                    {/*<GoogleLoginButton/>*/}
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
