import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const PasswordRecover = () => {
    return(
        <div className="d-flex align-items-center flex-grow-1 justify-content-center mb-3 mt-3">
        <Card>
            <Card.Header closeButton>
                <Card.Title>Recuperar Contraseña</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <div className="d-flex justify-content-center">
                        <div className="row">
                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </div>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    </div>
    )
}

export default PasswordRecover;