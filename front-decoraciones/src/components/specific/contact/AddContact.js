import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const AddContactInfo = ({ previousContactInfo }) => {
    const [formData, setFormData] = useState({
        id: "",
        Tipo_id: "",
        Nombre: "",
        Telefono: "",
        Correo: "",
        Direccion: "",
        Ciudad: "",
        Departamento: "",
        Nacionalidad: ""
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = previousContactInfo ? await axios.put("/api/contact", formData) : await axios.post("/api/contact", formData);
            if (response.status === 200) {
                setSuccess(true);
                setError("");
            }
        } catch (err) {
            setError("Failed to send contact information. Please try again.");
            setSuccess(false);
        }
    };

    useEffect(() => {
        if (previousContactInfo) {
            setFormData(previousContactInfo);
        }
    }, [previousContactInfo]);

    return (
        <div className="add-contact-info">
            <h2>Add Contact Information</h2>
            {success && <Alert variant="success">Message sent successfully!</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formId">
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        placeholder="Enter ID"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formTipoId">
                    <Form.Label>Tipo ID</Form.Label>
                    <Form.Control
                        type="text"
                        name="Tipo_id"
                        value={formData.Tipo_id}
                        onChange={handleChange}
                        placeholder="Enter Tipo ID"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="Nombre"
                        value={formData.Nombre}
                        onChange={handleChange}
                        placeholder="Enter Nombre"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formTelefono">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="text"
                        name="Telefono"
                        value={formData.Telefono}
                        onChange={handleChange}
                        placeholder="Enter Teléfono"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formCorreo">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        name="Correo"
                        value={formData.Correo}
                        onChange={handleChange}
                        placeholder="Enter Correo"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formDireccion">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                        type="text"
                        name="Direccion"
                        value={formData.Direccion}
                        onChange={handleChange}
                        placeholder="Enter Dirección"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formCiudad">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
                        type="text"
                        name="Ciudad"
                        value={formData.Ciudad}
                        onChange={handleChange}
                        placeholder="Enter Ciudad"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formDepartamento">
                    <Form.Label>Departamento</Form.Label>
                    <Form.Control
                        type="text"
                        name="Departamento"
                        value={formData.Departamento}
                        onChange={handleChange}
                        placeholder="Enter Departamento"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formNacionalidad">
                    <Form.Label>Nacionalidad</Form.Label>
                    <Form.Control
                        type="text"
                        name="Nacionalidad"
                        value={formData.Nacionalidad}
                        onChange={handleChange}
                        placeholder="Enter Nacionalidad"
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddContactInfo;