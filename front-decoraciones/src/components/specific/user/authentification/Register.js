import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Register = () => {
    return (
        <div className="d-flex align-items-center flex-grow-1 justify-content-center mb-3 mt-3">
            <Card>
                <Card.Header closeButton>
                    <Card.Title>Register</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre(s) y Apellidos*</Form.Label>
                            <Form.Control type="nombre y apellidos" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Documento / ID*</Form.Label>
                            <Form.Control type="Documento / ID*" placeholder="Digita tu número de intentidad" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Teléfono*</Form.Label>
                            <Form.Control type="tel" placeholder="Digita tu número telefonico" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Dirección / Barrio*</Form.Label>
                            <Form.Control type="email" placeholder="digita tu ubicación local" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Ciudad / Departamento*</Form.Label>
                            <Form.Control type="ciudad" placeholder="digita los lugares de ubicación" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control type="email" placeholder="digitaaquí@tucorreo.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Contraseña*</Form.Label>
                            <Form.Control type="email" placeholder="digita tu contraseña" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirma tu Contraseña*</Form.Label>
                            <Form.Control type="password" placeholder="digita tu contraseña" />
                        </Form.Group>

                        <div className="d-flex justify-content-center">
                            <div className="row">
                            </div>
                            <div className="row">
                                <Button variant="primary" type="submit">
                                    Crear cuenta
                                </Button>
                            </div>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Register;