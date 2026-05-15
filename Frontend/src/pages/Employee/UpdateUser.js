
import './UpdateUser.css';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import axios from "axios";

const UpdateUser = () => {


        const {id} = useParams();

        const navigate = useNavigate();


   
    
       const [formData, setFormData] = useState({

            name: "",

            email: "",

            department: "",

            phone: ""

    });
    
        const handleInputChange = (event) => {
    
            const { name, value } = event.target;
    
            setFormData({
    
                ...formData,
    
                [name]: value,
    
            });
        };


    useEffect(() => {

    const fetchEmployee = async () => {

        try {

            const response = await axios.get(

                `http://localhost:8090/api/employee/${id}`

            );

            console.log(response.data);

            setFormData(response.data);

        }

        catch(error) {

            console.error(
                "Error fetching employee data:",
                error.message
            );

        }

    }

    fetchEmployee();

}, [id]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch(`http://localhost:8090/api/employee/${id}`,{
                method: 'PATCH',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(formData),


            });

            const data = await response.json();

            console.log("User Updated Successfully", data);
        }
        catch(error){
            console.error("Error updating employee:", error.message);
        }
        navigate("/");
    }

    return (
        <>

            <div className="center-form">

                <h1>Edit Employee</h1>

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
                        Edit Employee
                    </Button>

                </Form>

            </div>

        </>

    )

}
export default UpdateUser;
