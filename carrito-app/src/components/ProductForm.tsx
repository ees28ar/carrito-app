import React, { useEffect, useState } from 'react';
import "./ProductList.css";

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
  const [showBlinking, setShowBlinking] = useState(true); // Estado para alternar la visibilidad de la clase

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBlinking((prevShowBlinking) => !prevShowBlinking); // Alterna la visibilidad
    }, 1000); // Cambia cada 1000 milisegundos (1 segundo)
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

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
      <div className={showBlinking ? 'blinking-text' : ''}>APP WEB EN DESARROLLO</div> {/* Aplica la clase si showBlinking es true */}
    </form>
  );
};

export default ProductForm;