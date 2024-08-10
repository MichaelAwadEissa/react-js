import React, { useState } from 'react';
import MyTitle from './MyTitle'; // Make sure the path is correct
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
// import {useParams} from 'react-router-dom';

function AddUser() {
  const location = useLocation();
  console.log(location);
  const history = useNavigate(); // Corrected case here
  // const params = useParams();
  const [Info, setInfo] = useState({
    name: 'aya',
    position: 'developer',
  });

  const [Errors, setErrors] = useState({
    nameErr: '',
    positionErr: '',
  });

  const handleUserData = (e) => {
    const { name, value } = e.target;
    
    if (name === 'name') {
      setInfo({ ...Info, name: value });
      setErrors({
        ...Errors,
        nameErr:
          value.length === 0
            ? 'This field is required'
            : value.length < 3
            ? 'Name should be at least 3 characters long'
            : '',
      });
    } else if (name === 'position') {
      setInfo({ ...Info, position: value });
      setErrors({
        ...Errors,
        positionErr:
          value.length === 0
            ? 'This field is required'
            : value.length < 3
            ? 'Position should be at least 3 characters long'
            : '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();   
    if (!Errors.nameErr && !Errors.positionErr) {
      history.push('/');
    }
  };

  return (
    <>
      <MyTitle head="Add User" mycolor="blue" />
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={Info.name}
            name="name"
            onChange={(e) => handleUserData(e)}
          />
          {Errors.nameErr && <p className="text-danger">{Errors.nameErr}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Position"
            value={Info.position}
            name="position"
            onChange={(e) => handleUserData(e)}
          />
          {Errors.positionErr && <p className="text-danger">{Errors.positionErr}</p>}
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={!!Errors.nameErr || !!Errors.positionErr}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddUser;
