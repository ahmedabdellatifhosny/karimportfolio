"use client";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "@/app/login/login.css";

function login() {
  return (
    <div className="login">
      <div className="login-header text-center mb-1">
       <p className="title mb-3 fs-5 fw-bold">login dashboard</p>
      </div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className=" mb-3" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className="  mb-3" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="  mb-3" controlId="formBasicCheckbox">
          <Form.Check  type="checkbox" label="Remember Password" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default login;
