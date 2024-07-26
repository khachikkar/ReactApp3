import React from 'react';
import { useParams } from 'react-router-dom';
import "./ProductDetail.css"


function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='d-page'>
      <h1 className='d-title'>{product.title}</h1>
        <img className='d-img' src={product.url} alt="img" />
      <p>{product.text}</p>
    </div>
  );
}

export default ProductDetail;
