import React, { useState } from 'react';
import { auth } from '../api/firebase';
import { Form } from '../Form';

export const Basket = ({ isLoggedIn, products, selectedProducts }) => {
    if (!isLoggedIn) {
    return <div>You have to log in to view your basket.</div>;

    return (
        <div>
            <h1>Basket Contents</h1>
            {selectedProducts.length === 0 ? (
                <p>No products in the basket.</p>
            ) : (
                <ul>
                    {selectedProducts.map((productId) => {
                        const product = products.find(prod => prod.id === productId);
                        return (
                            <li key={products.id}>
                                {product.name} - ${product.price}
                            </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);

// Tu miejsce na produkty jako stałe. Np.:
const products = [
     { id: 1, name: 'Stuff A', price: 75},
     { id: 2, name: 'Stuff B', price: 80},
     { id: 3, name: 'Stuff C', price: 100},
];

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setSelectedProducts([]);
    };

    const addToBasket = productId => {
        setSelectedProducts(prevSelected => [...prevSelected, productId]);
    };

    const removeFromBasket = productId => {
        setSelectedProducts(prevSelected =>
            prevSelected.filter(id => id !== productId)
        );
    };

    return (
        <div>
            {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
            <h1>Welcome to the Basket</h1>
            <div>
                <h2>Our Products</h2>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            {product.name} - ${product.price}
                            <button onClick={() => addToBasket(product.id)}>Add to Basket</button>
                        </li>
                    ))}
                </ul>
            </div>
            <Basket isLoggedIn={isLoggedIn} products={products} selectedProducts={selectedProducts} />
        </div>
    );
};
};
export default App;