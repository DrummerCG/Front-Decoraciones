import { Modal, Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';

const AddClientModal = ({ handleModalToggle, showAddClientModal }) => {

    return (
        <Modal show={showAddClientModal} onHide={handleModalToggle}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Nuevo Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SearchContactInfoState />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleModalToggle}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

const SearchContactInfoState = () => {
    const documentTypes = ['Cedula', 'NIT', 'Pasaporte', 'RUT', 'Tarjeta de Identidad'];
    const [document, setDocument] = useState('');
    const [documentType, setDocumentType] = useState('');

    const handleSearch = async () => {
        if (!documentType || !document) {
            alert('Please select a document type and enter a document number.');
            return;
        }

        try {
            const response = await axios.get(`/api/contact`, {
                params: {
                    documentType,
                    document,
                },
            });
            console.log('Contact data:', response.data);
            // Handle the response data as needed
        } catch (error) {
            console.error('Error fetching contact data:', error);
            alert('Failed to fetch contact data. Please try again.');
        }
    };
    return (
        <Form>
            <Form.Group className="mb-3" controlId="documentType">
                <Form.Label>Tipo de Documento</Form.Label>
                <Form.Control
                    as="select"
                    value={documentType}
                    onChange={(e) => setDocumentType(e.target.value)}
                >
                    <option value="">Seleccione el Tipo de Documento</option>
                    {documentTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="document">
                <Form.Label>Documento</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese el número de documento"
                    value={document}
                    onChange={(e) => setDocument(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" onClick={handleSearch}>
                Buscar
            </Button>
        </Form>
    );
}

export default AddClientModal;