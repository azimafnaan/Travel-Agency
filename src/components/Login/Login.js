import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className="login-section shadow-lg p-3 mb-5 bg-body rounded">
            <div className="login-text">
                <h1>Please Login Here</h1>
            </div>
            <div className="login-btn">
                <Button onClick={handleGoogleLogin} variant="warning">Login With Google</Button>
            </div>
        </div>
    );
};

export default Login;