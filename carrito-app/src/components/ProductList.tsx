import React from 'react';
import "./ProductList.css";

type Product = {
  name: string;
  description: string;
  price: number;
  quantity: number;
};

type ProductListProps = {
  products: Product[];
  onRemoveProduct: (product: Product) => void;
  onIncrement: (product: Product) => void;
  onDecrement: (product: Product) => void;
};

const ProductList: React.FC<ProductListProps> = ({
  products,
  onRemoveProduct,
  onIncrement,
  onDecrement,
}) => {
  const handleRemoveClick = (product: Product) => {
    onRemoveProduct(product);
  };

  const handleIncrementClick = (product: Product) => {
    onIncrement(product);
  };

  const handleDecrementClick = (product: Product) => {
    onDecrement(product);
  };

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>Ningún Producto Agregado.</p>
      ) : (
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={product.name} className="product-card">
              <h3>{product.name}</h3>
              {product.description && <p>{product.description}</p>}
              <p>${product.price.toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrementClick(product)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => handleIncrementClick(product)}>+</button>
              </div>
              <button onClick={() => handleRemoveClick(product)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
