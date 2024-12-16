import React from 'react';
import './home.css';

function HomePage() {
    const products = [
        { id: 1, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9eJggZ3UyFSfUSujBpnlJ7luikAo6ICIjTw&s', name: 'SMART WATCH', price: '$100' },
        { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0vkndeIUonG6GoDi2YsRs5mX1WJbwweWoA&s', name: 'REALME EAR PODS', price: '$120' },
        { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbEkZHonygfe8BcyJhqj7wMcSf7mnEcSQNog&s', name: ' LAPTOP', price: '$1500' },
        { id: 4, image: 'https://www.madmonkeystore.in/cdn/shop/products/Graphichoodiemockup_38_2e816d0d-31cc-400a-a445-ff11b13b43f6.png?v=1666265700', name: 'HOODIE', price: '$80' },
        { id: 5, image: 'https://www.khoslaonline.com/wp-content/uploads/2023/06/ONE-PLUS-NORD-CE-2-LITE-5G-BLUE-TIDE-6GB128GB.png', name: 'ONEPLUS', price: '$200' },
        { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCgNWSk8IJNwcclOZr2xi3Pm2XQ83NsigCIg&s', name: 'HEADSET', price: '$150' },
        { id: 7, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR-qdF6cDWjNm2zw-jwC8-myEpfQlrMuJ7maMloFV5rk1JWFwD27zVAVlz0247bp7JxLnQsfwroxx2yupqq64Fny8nABVoluzGDoe5RHwwH5vvFACZYkinC0A&usqp=CAE', name: 'SHOES', price: '$75' },
        { id: 8, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTY9tiODGlfpEdTWUskD00LgtIYf-lx4hLXGHj2JYW66jqpaRzo3ZmNYXdbXXxhIaGWiMAOAzhcHZCo23S6dOxrCC4Kimgvdl3DSx1hjey7p80QHHenMLRV&usqp=CAE', name: 'CYCLE', price: '$50' },
        { id: 9, image: 'https://cdnmedia.dsc-cricket.com/media/catalog/product/cache/2ea19741d52ca8308b61898f39407e18/d/s/dsc-intense-assault-cricket-bat-ind-2.jpg', name: 'CRICKET BAT', price: '$40' },
        { id: 10, image: 'https://whirlpoolindia.vtexassets.com/arquivos/ids/167790/Xpert-care-Silver-lid-open-7kg_1500x1500.jpg?v=638379679720200000', name: 'WASHING MACHINE ', price: '$60' },
    ];

    const handleAddToCart = async (product) => {
        try {
            const response = await fetch('http://localhost:5000/api/cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ productId: product.id, quantity: 1 }),
            });
            const result = await response.json();
            if (response.ok) {
                alert('Product added to cart');
            } else {
                console.error('Failed to add product to cart', result);
            }
        } catch (error) {
            console.error('Error adding to cart', error);
        }
    };

    return (
        <div className="home">
            <h1>Welcome to Our Store</h1>
            <div className="products">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
