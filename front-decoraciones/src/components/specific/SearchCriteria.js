import React from 'react';
import { useIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SearchCriteria = () => {
  const strings = useIntl();
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={12} md={9}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill d-flex"
              aria-label={() => (strings.formatMessage({ id: "search" }))}
            />
            <Button className="rounded-pill" variant="outline-primary">
              <FontAwesomeIcon icon={faSearch} className="fa-lg" />
            </Button>
          </Form>
        </Col>
        <Col sm={12} md={3}>
          <Form>
            <Form.Group controlId="categoryFilter">
              <Form.Label>Categoría</Form.Label>
              <Form.Control as="select">
                <option>Todos</option>
                <option>Categoría 1</option>
                <option>Categoría 2</option>
                <option>Categoría 3</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="priceRangeFilter">
              <Form.Label>Rango de Precio</Form.Label>
              <Form.Control type="number" placeholder="Mínimo" />
              <Form.Control type="number" placeholder="Máximo" className="mt-2" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Aplicar Filtros
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchCriteria;