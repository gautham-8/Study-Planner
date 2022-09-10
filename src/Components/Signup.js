import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useForm} from 'react-hook-form'
import axios from 'axios'

function Signup() {
    const {register,handleSubmit,formState:{errors}} = useForm()

    const onFormSubmit = (user) => {
        axios.post('http://localhost:4000/user-api/create-user',user)
        .then(response => {
            console.log(response)
        })
        .catch(error => alert(error))
    }

    return (
        <div className="">
            <div className="card cols col-lg-5 col-md-8 col-10 mx-auto m-5">
                <div className="container mb-2">
                    <p className="display-6 text-center">Signup</p>
                    <Form onSubmit = {handleSubmit(onFormSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" {...register("email",{required:true})}/>
                            {errors.email && (<p className="text-danger">*Required field</p>)}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="text" placeholder="Phone number" {...register("phone",{required:true})} />
                            {errors.phone?.type==='required'&& <p className="text-danger">* Required field</p>}
                        </Form.Group>
    
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" {...register("password",{required:true})}/>
                            {errors.password?.type==='required'&& <p className="text-danger">* Required field</p>}
                        </Form.Group>
    
                        <Button variant="primary" type="submit" className="d-block mx-auto">
                            Signup
                        </Button>

                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Signup