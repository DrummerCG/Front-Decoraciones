import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Login = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                variant="primary" onClick={handleShow}>
                Iniciar Sesión
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Iniciar Sesión</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo
                                electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>

                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox"
                                label="Recordar contraseña" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Iniciar Sesión
                        </Button>
                    </Form>

                    <p>O inicia sesión con:</p>
                    <Button variant="outline-google">
                        <i className="bi bi-google"></i> Iniciar sesión con Google
                    </Button>
                    <Button variant="outline-facebook">
                        <i className="bi bi-facebook"></i> Iniciar sesión con Facebook
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default Login;