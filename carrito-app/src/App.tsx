import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Cart from './components/Carts';
import './styles/styles.css';

type Producto = {
  nombre: string;
  descripcion: string;
  precio: number;
  cantidad: number;
};

const App = () => {
  const [products, setProducts] = useState<Producto[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);

  const handleAddProduct = (product: Producto) => {
    setProducts((prevProducts) => [...prevProducts, product]);
    calculaCartTotal([...products, product]);
  };

  const handleRemoveProduct = (product: Producto) => {
    setProducts((prevProducts) => prevProducts.filter((p) => p.nombre !== product.nombre));
    calculaCartTotal(products.filter((p) => p.nombre !== product.nombre));
  };

  const handleIncrement = (product: Producto) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((p) =>
        p.nombre === product.nombre ? { ...p, cantidad: p.cantidad + 1 } : p
      );
      calculaCartTotal(updatedProducts);
      return updatedProducts;
    });
  };

  const handleDecrement = (product: Producto) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((p) =>
        p.nombre === product.nombre && p.cantidad > 1 ? { ...p, cantidad: p.cantidad - 1 } : p
      );
      calculaCartTotal(updatedProducts);
      return updatedProducts;
    });
  };

  const calculaCartTotal = (updatedProducts: Producto[]) => {
    const total = updatedProducts.reduce((sum, product) => sum + product.precio * product.cantidad, 0);
    setCartTotal(total);
  };

  return (
    <div className="container">
      <div className="column">
        <ProductForm onAddProduct={handleAddProduct} />
      </div>
      <div className="column">
        <Cart cartTotal={cartTotal} />
        <ProductList
          products={products}
          onRemoveProduct={handleRemoveProduct}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    </div>
  );
};

export default App;
