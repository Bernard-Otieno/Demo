import './ProductPage.css';
import { Link } from 'react-router-dom'; 
import React, { useState } from 'react';
import apple from '../components/images/apple.jpg';
import banana from '../components/images/banana.jpg';
import melon from '../components/images/melon.jpg';
import pineapple from '../components/images/pineapple 2.jpg';
import { useCart } from '../../context/CartContext';


const productsData = [
  {
    id: 1,
    name: "Apple",
    price: 250,
    image: apple,
    description: "Fresh red apple from the highlands.",
    category: "Fruits",
  },
  {
    id: 2,
    name: "Banana",
    price: 150,
    image: banana,
    description: "Sweet ripe bananas rich in potassium.",
    category: "Fruits",
  },
  {
    id: 3,
    name: "Melon",
    price: 1120,
    image: melon,
    description: "Juicy and refreshing melon slices.",
    category: "Fruits",
  },
  {
    id: 4,
    name: "Pineapple",
    price: 250,
    image: pineapple,
    description: "Tropical pineapple, perfect for juicing.",
    category: "Tropical",
  },
];
 function ProductPage() {
  const [products] = useState(productsData);
  const [filter, setFilter] = useState("All");
  const { addToCart } = useCart();

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);

      return (
        <div className="product-page">
          <h1 className="product-title">Our Products</h1>
    
    
          
    
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>KES {product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
                     
          </div> 
          <div className="nav-container">
            <Link to="/cart" className="nav-button">🛒 View Cart</Link>
          </div>
        </div>
      );
}

export default ProductPage;
