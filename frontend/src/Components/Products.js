import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
const Products = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant='top'
          style={{ height: '235px' }}
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} ratings`}
          />
        </Card.Text>
        <Card.Text as='h3'>
          <i
            class='fas fa-rupee-sign'
            style={{ color: 'black', opacity: '0.5', padding: '5px' }}
          ></i>
          {product.price.toFixed(2)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Products;
