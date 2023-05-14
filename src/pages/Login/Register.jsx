import React, { useContext } from 'react';
import { Button,Form } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
    const {createUser ,updateProfileData} = useContext(AuthContext);
    const [accepted , setAccepted] = useState(false)


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const password = form.password.value;

        console.log(name, email, url, password);

        // create user
        createUser(email,password)
            .then(result =>{
                const createUser = result.user;
                console.log(createUser);
            })
            .catch(error =>{
                console.log(error.message)
            })

        //update profile 
        updateProfileData(name ,url);
        console.log(updateProfileData)
    }

    const handleAccepted = event =>{
        console.log(event.target.checked);
        setAccepted(event.target.checked);
    }

    return (
        <div className='from-area w-50 mx-auto bg-light p-5 border-round' >
            <h3 className='text-center mb-4 fw-bold'>Register your account</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUrl">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="url" name="url" placeholder="" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                    onClick={handleAccepted}
                     type="checkbox" 
                     name="accept"
                     label={<>Accept <Link to="/terms">Terms & Condition </Link></>}
                     />
                </Form.Group>
                <Button disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
            </Form>

           
        </div>
    );
};

export default Register;