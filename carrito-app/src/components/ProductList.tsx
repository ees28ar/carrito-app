import React from 'react';
import "./ProductList.css";

type Producto = {
  nombre: string;
  descripcion: string;
  precio: number;
  cantidad: number;
};

type ProductListProps = {
  products: Producto[];
  onRemoveProduct: (product: Producto) => void;
  onIncrement: (product: Producto) => void;
  onDecrement: (product: Producto) => void;
};

const ProductList: React.FC<ProductListProps> = ({
  products,
  onRemoveProduct,
  onIncrement,
  onDecrement,
}) => {
  const handleRemoveClick = (product: Producto) => {
    onRemoveProduct(product);
  };

  const handleIncrementClick = (product: Producto) => {
    onIncrement(product);
  };

  const handleDecrementClick = (product: Producto) => {
    onDecrement(product);
  };

  return (
    <div className="product-list-container">
      <h2>Lista de Productos</h2>
      {products.length === 0 ? (
        <p>Ningún Producto Agregado.</p>
      ) : (
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={product.nombre} className="product-card">
              <img src='https://i.postimg.cc/N0GKjf3w/pngwing-com-5.png' alt="Imagen del producto" />
              <h3>{product.nombre}</h3>
              {product.descripcion && <p>{product.descripcion}</p>}
              <p>${product.precio.toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrementClick(product)}>-</button>
                <span>{product.cantidad}</span>
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

