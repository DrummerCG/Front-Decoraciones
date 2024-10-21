import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className="d-flex align-items-center flex-grow-1 justify-content-center mb-3 mt-3">
            <Card>
                <Card.Header closeButton>
                    <Card.Title>Iniciar Sesión</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>

                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox"
                                label="Recordar contraseña" />
                                <Link to="/password-recover">
                                    <a style={{ color: 'black' }}>olvidaste tu contrasena?</a>
                                </Link>
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <div className="row">
                                <Link to="/sign-in">
                                    <a style={{ color: 'black' }}>registrate</a>
                                </Link>
                            </div>
                            <div className="row">
                                <Button variant="primary" type="submit">
                                    Iniciar Sesión
                                </Button>
                            </div>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );

}

export default Login;