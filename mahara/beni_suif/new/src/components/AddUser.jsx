import React from 'react';
import MyTitle from './MyTitle'; // Make sure the path is correct
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddUser() {
    return (
        <>
            
            <MyTitle head="Add User" mycolor="blue" />
        
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="position" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        
        </>
    );
}

export default AddUser;
