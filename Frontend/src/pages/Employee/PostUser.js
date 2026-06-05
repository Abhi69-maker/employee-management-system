import "./PostUser.css";

import Form from "react-bootstrap/Form";

import { useState } from "react";

import Button from "react-bootstrap/Button";



import axios from "axios";

const PostUser = () => {

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        phone: "",
        department: ""

    });

    const handleInputChange = (event) => {

        const { name, value } = event.target;

        setFormData({

            ...formData,

            [name]: value,

        });
    };



    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(

                "https://employee-management-system-1-3w4p.onrender.com/api/employee",
                formData

                

            );

            console.log(response.data);

            alert("Employee Added Successfully");

        } catch(error) {

            console.log(error);

        }
    };

    return (

        <>

            <div className="center-form">

                <h1>Post New Employee</h1>

                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId="formBasicName">

                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />

                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">

                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />

                    </Form.Group>

                    <Form.Group controlId="formBasicDepartment">

                        <Form.Control
                            type="text"
                            name="department"
                            placeholder="Enter Department"
                            value={formData.department}
                            onChange={handleInputChange}
                        />

                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">

                        <Form.Control
                            type="text"
                            name="phone"
                            placeholder="Enter Phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />

                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Post Employee
                    </Button>

                </Form>

            </div>

        </>

    );
};

export default PostUser;