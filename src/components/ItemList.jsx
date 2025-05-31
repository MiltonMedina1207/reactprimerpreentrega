import React from 'react';
import Item from './Item';
import { Container, Row, Col } from 'react-bootstrap';

const ItemList = ({ data }) => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Productos</h2>
      <Row>
        {data.map((producto) => (
          <Col key={producto.id} sm={12} md={6} lg={4} className="mb-4">
            <Item producto={producto} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;



