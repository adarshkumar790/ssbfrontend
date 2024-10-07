import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/login', { email, password })
            .then(res => {
                if (res.data.success) {
                    alert('Login Successfully');
                    navigate('/dashboard');
                } else {
                    alert('Login Failed: ' + res.data.message);
                }
            })
            .catch(err => {
                console.error('Login Error:', err);
                alert('Login failed. Please try again later.');
            });
    };

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-success'>
            <div className='p-3 bg-dark rounded w-25'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email' className='text-warning'>Email</label>
                        <input type='email' placeholder='Enter Email' className='form-control' required
                            value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='text-warning'>Password</label>
                        <input type='password' placeholder='Enter Password' className='form-control' required
                            value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type='submit' className='btn btn-success'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
