import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthenticationService from '../services/authentication-service';


class Login extends React.Component {
    static service = new AuthenticationService();

    state = {
        email: '',
        password: '',
        error: '',
        isLoggedIn: false,
    };

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
const { email, password } = this.state;
        const credentials = {
            email,
            password
        };
        this.setState({
            error: '',
        }, async () => {
            try {
                const result = await Login.service.login(credentials);

                if (!result.success) {
                    const errors = Object.values(result.errors).join(' ');

                    throw new Error(errors);

                }
                console.log(result);

                this.state({
                    isLoggedIn: true
                });

            } catch (error) {
                this.setState({
                    error: error.message,
                });
            }
        })
    }



    render() {
        const { email, password, isLoggedIn, error } = this.state;

        if (isLoggedIn) {
            return (
                <Redirect to="/" />
            );
        }
        return (
            <div class="form-wrapper" >
                {
                    error.length
                        ? <div>Something went wrong: {error}</div>
                        : null
                }
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email" id="email" placeholder="Enter e-mail" value={email} onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter password" value={password} onChange={this.handleChange} />
                    </div>
                    <button type="submit"></button>
                </form>
            </div>
        );
    }
}

export default Login;