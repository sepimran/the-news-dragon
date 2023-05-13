import React, { useContext } from 'react';
import { Button ,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {
    const {signInUser} = useContext(AuthContext);

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // sign in
        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error =>{
                console.log(error.message)
            })
    }

    return (
        <div className='from-area w-50 mx-auto bg-light p-5 border-round' >
            <h3 className='text-center mb-4 fw-bold'>Login your account</h3>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>

            <div className='mt-4'>
                Dont’t Have An Account ? <Link to='/register'>Register</Link>
            </div>
        </div>
    );
};

export default Login;