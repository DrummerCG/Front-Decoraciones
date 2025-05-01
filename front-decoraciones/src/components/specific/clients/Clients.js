import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Button, Col, Container, Form, Row, Modal } from "react-bootstrap";
import AddClientModal from './AddClientModal';

const axios = require('axios');

const ClientsContainer = styled.div`
  width: 90%;
  margin-top: 100px;
  text-align: center;
  padding: 0 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  position: relative;
  overflow: hidden; /* Asegura que la imagen de fondo no se desborde */
`;

const AddClientButton = styled.button`
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        z-index: 1000;
    `;

const Clients = () => {
    const [clients, updateClients] = useState([]);
    const [showAddClientModal, setShowAddClientModal] = useState(false);

    const handleModalToggle = () => {
        setShowAddClientModal(!showAddClientModal);
    };

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get('https://api.example.com/clients'); // Reemplaza con la URL de tu API
                updateClients(response.data);
            } catch (error) {
                console.error('Error fetching clients:', error);
            }
        };

        fetchClients();
    }, []);

    return (
        <div>
            <h1>Clients Management</h1>
            <p>Manage your clients efficiently here.</p>
            <SearchCriteria />
            <SearchResults clients={clients} />
            <AddClientModal handleModalToggle={handleModalToggle} showAddClientModal={showAddClientModal}/>
            <AddClientButton onClick={handleModalToggle}>+</AddClientButton>
        </div>
    );
};

const SearchCriteria = () => {
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.searchInput.value;
        console.log('Search submitted:', searchValue);
        // Add logic to handle the search here
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col sm={12} md={9}>
                    <Form
                        className="d-flex"
                        onSubmit={handleSearchSubmit}
                    >
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 rounded-pill d-flex"
                            aria-label="Search"
                            name="searchInput"
                        />
                        <Button type="submit" className="rounded-pill" variant="outline-primary">
                            <FontAwesomeIcon icon={faSearch} className="fa-lg" />
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

const SearchResults = ({ clients }) => {
    return (
        <div>
            {clients.map((client, index) => (
                <div key={index}>
                    <img src={client.image} alt={client.name} />
                    <h2>{client.name}</h2>
                    <p>{client.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Clients;