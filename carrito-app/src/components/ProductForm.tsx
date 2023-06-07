import React, { useState } from 'react';

type Producto = {
  nombre: string;
  descripcion: string;
  precio: number;
  cantidad: number;
};

type ProductFormProps = {
  onAddProduct: (product: Producto) => void;
};

const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescripcion(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrecio(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nombre && precio) {
      const product: Producto = {
        nombre: nombre,
        descripcion: descripcion,
        precio: parseFloat(precio),
        cantidad: 1, 
      };

      onAddProduct(product);

      setNombre('');
      setDescripcion('');
      setPrecio('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>
      <div>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={handleNameChange} required />
      </div>
      <div>
        <label>Descripción:</label>
        <input type="text" value={descripcion} onChange={handleDescriptionChange} />
      </div>
      <div>
        <label>Precio:</label>
        <input type="number" step="0.01" value={precio} onChange={handlePriceChange} required />
      </div>
      <button type="submit" disabled={!nombre || !precio}>
        Agregar
      </button>
    </form>
  );
};

export default ProductForm;

