import React, { useState } from 'react';

type Product = {
  name: string;
  description: string;
  price: number;
  quantity: number;
};

type ProductFormProps = {
  onAddProduct: (product: Product) => void;
};

const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name && price) {
      const product: Product = {
        name,
        description,
        price: parseFloat(price),
        quantity: 1, // Inicializamos la cantidad en 1 al agregar el producto
      };

      onAddProduct(product);

      setName('');
      setDescription('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} required />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={handleDescriptionChange} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" step="0.01" value={price} onChange={handlePriceChange} required />
      </div>
      <button type="submit" disabled={!name || !price}>
        Agregar
      </button>
    </form>
  );
};

export default ProductForm;

