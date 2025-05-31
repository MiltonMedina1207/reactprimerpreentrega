import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <Link to={`/item/${producto.id}`} className="text-decoration-none text-dark">
      <Card className="h-100">
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            <strong>Marca:</strong> {producto.marca}<br />
            <strong>Precio:</strong> ${producto.precio}<br />
            <strong>Stock:</strong> {producto.stock}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Item;

