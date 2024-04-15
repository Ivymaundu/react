import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import Login from './login';

interface Product {
  id: number;
  name: string;
  price: number;
}


const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      
      const response = await axios.get('http://127.0.0.1:5000/products');
      setProducts(response.data);
      console.log()
    } catch (error) {
      setError('Error fetching products');
    }
  };

  return (
    <div>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;




