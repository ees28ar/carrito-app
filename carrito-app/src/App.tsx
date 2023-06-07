import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Cart from './components/Carts';
import './styles/styles.css';

type Product = {
  name: string;
  description: string;
  price: number;
  quantity: number;
};

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);

  const handleAddProduct = (product: Product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
    calculateCartTotal([...products, product]);
  };

  const handleRemoveProduct = (product: Product) => {
    setProducts((prevProducts) => prevProducts.filter((p) => p.name !== product.name));
    calculateCartTotal(products.filter((p) => p.name !== product.name));
  };

  const handleIncrement = (product: Product) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((p) =>
        p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
      );
      calculateCartTotal(updatedProducts);
      return updatedProducts;
    });
  };

  const handleDecrement = (product: Product) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((p) =>
        p.name === product.name && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
      );
      calculateCartTotal(updatedProducts);
      return updatedProducts;
    });
  };

  const calculateCartTotal = (updatedProducts: Product[]) => {
    const total = updatedProducts.reduce((sum, product) => sum + product.price * product.quantity, 0);
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
