import { useState } from "react";
import "./App.css";

function App() {
  const products = [
    {
      name: "Laptop",
      category: "Electronics",
      price: 60000,
      image: "/products/laptop.png",
      rating: 4.8,
    },
    {
      name: "Headphones",
      category: "Electronics",
      price: 18000,
      image: "/products/headphones.png",
      rating: 3.9,
    },
    {
      name: "T-Shirt",
      category: "Fashion",
      price: 800,
      image: "/products/t shirt.png",
      rating: 4.9,
    },
    {
      name: "Shoes",
      category: "Fashion",
      price: 2500,
      image: "/products/shoes.png",
      rating: 4.4,
    },
    {
      name: "Red Prestige Mixer",
      category: "Home and Kitchen",
      price: 3799,
      image: "/products/mixer.png",
      rating: 3.4,
    },
    {
      name: "Mouse",
      category: "Electronics",
      price: 400,
      image: "/products/mouse.png",
      rating: 4.4,
    },
    {
      name: "Minimalist Repair Serum",
      category: "Beauty",
      price: 440,
      image: "/products/minimalist.png",
      rating: 3.3,
    },
    {
      name: "Women's Rayon Printed Anarkali Kurta",
      category: "Fashion",
      price: 999,
      image: "/products/kurti.png",
      rating: 4.5,
    },
    {
      name: "Mobile Holder",
      category: "Electronics",
      price: 179,
      image: "/products/mob holder.png",
      rating: 5,
    },
    {
      name: "Powerbank",
      category: "Electronics",
      price: 900,
      image: "/products/powerbank.png",
      rating: 3.8,
    },
    {
      name: "Laptop Holder",
      category: "Electronics",
      price: 1800,
      image: "/products/lap holder.png",
      rating: 4.1,
    },
    {
      name: "Analog Watches",
      category: "Watches",
      price: 297,
      image: "/products/analog watch.png",
      rating: 3.4,
    },
    {
      name: "Cricket Stumps & Wickets",
      category: "Sports",
      price: 589,
      image: "/products/stmp.png",
      rating: 2.8,
    },
    {
      name: "Skating Shoes",
      category: "Sports",
      price: 1345,
      image: "/products/skating shoe.png",
      rating: 4.5,
    },
    {
      name: "PVC Football with Air Pump",
      category: "Sports",
      price: 654,
      image: "/products/foot ball.png",
      rating: 5,
    },
    {
      name: "Classic Heavy Punching Bag",
      category: "Sports",
      price: 774,
      image: "/products/punching bag.png",
      rating: 4.1,
    },
    {
      name: "Swimming Goggles",
      category: "Sports",
      price: 667,
      image: "/products/swimmimg goggles.png",
      rating: 4.2,
    },
    {
      name: "Helmets",
      category: "Car & Motor Bike",
      price: 2674,
      image: "/products/helmet.png",
      rating: 2.9,
    },
    {
      name: "Bike Cover",
      category: "Car & Motor Bike",
      price: 599,
      image: "/products/bike cover.png",
      rating: 3.4,
    },
    {
      name: "Classic Riding Gloves",
      category: "Car & Motor Bike",
      price: 466,
      image: "/products/rider gloves.png",
      rating: 3.6,
    },
    {
      name: "Bike LED Light",
      category: "Car & Motor Bike",
      price: 399,
      image: "/products/bike led.png",
      rating: 4.2,
    },
    {
      name: "Designer Arm Sleeves",
      category: "Car & Motor Bike",
      price: 299,
      image: "/products/sleeve.png",
      rating: 3.3,
    },
    {
      name: "Leather Diary",
      category: "Stationery",
      price: 199,
      image: "/products/dairy.png",
      rating: 2.4,
    },
    {
      name: "Drawing and Painting Art Set",
      category: "Stationery",
      price: 3000,
      image: "public/products/drawing set.png",
      rating: 4.4,
    },
    {
      name: "File Folders",
      category: "Stationery",
      price: 256,
      image: "/products/file folder.png",
      rating: 3.6,
    },
    {
      name: "400 Multi Colour Sticky Notes",
      category: "Stationery",
      price: 589,
      image: "/products/drawing set.png",
      rating: 4.9,
    },
    {
      name: "Classic Pen Holders",
      category: "Stationery",
      price: 234,
      image: "/products/pen holder.png",
      rating: 3.4,
    },
    {
      name: "Colouring Drawing Books",
      category: "Stationery",
      price: 111,
      image: "/products/colorbook.png",
      rating: 4.4,
    },
    {
      name: "Canvazo 3D Pen for Kids",
      category: "Stationery",
      price: 299,
      image: "/products/3d canva pen.png",
      rating: 3.7,
    },
    {
      name: "Monitor",
      category: "Electronics",
      price:6499 ,
      image: "public/products/monitor.png",
      rating:3.9 ,
    },
    {
      name: "HP Pen drive",
      category: "Electronics",
      price: 829,
      image: "public/products/pen drive.png",
      rating: 4.6,
    },
    {
      name: "Philips Hair Straightner",
      category: "Electronics",
      price:904 ,
      image: "public/products/hair straightner.png",
      rating: 4.6,
    },
    {
      name: "Canon Printer",
      category: "Electronics",
      price:10999,
      image: "public/products/Canon Printer.png",
      rating:4.2,
    },
    {
      name: "XO Pen(pack of 10)",
      category: "Stationary Items",
      price:110 ,
      image: "public/products/XO pen.png",
      rating: 4.4,
    },
    {
      name: "Sticky Notes",
      category: "Stationary Items",
      price: 199,
      image: "public/products/Sticky Notes.png",
      rating:4.2 ,
    },
    {
      name: "Camlin Geomentry Box",
      category: "Stationary Items",
      price: 180,
      image: "public/products/Camlin Geomentry Box.PNG",
      rating:4.3 ,
    },
    {
      name: "Back Bag",
      category: "Stationary Items",
      price: 799,
      image: "public/products/back bag.png",
      rating:4.1 ,
    },
    
    {
      name: "Mid Rise Blue Jeans",
      category: "Fashion",
      price:671 ,
      image: "public/products/Mid Rise Blue Jeans.png",
      rating:4.6 ,
    },
    {
      name: "Jean Shirt for men",
      category: "Fashion",
      price:10916 ,
      image: "public/products/shirt men.png",
      rating:3.9 ,
    },
    {
      name: "Formal Shoes",
      category: "Fashion",
      price: 531,
      image: "public/products/formal shoe.png",
      rating: 4.6,
    },
    {
      name: "Heels",
      category: "Fashion",
      price:799 ,
      image: "public/products/heels.png",
      rating:4.3 ,
    },
    {
      name: "Denver Perfume",
      category: "Fashion",
      price:47 ,
      image: "public/products/perfume.png",
      rating:4.3 ,
    },
    {
      name: "Men Ankle Length Socks",
      category: "Fashion",
      price:98 ,
      image: "public/products/Men Ankle Length Socks.png",
      rating:3.9 ,
    },
    {
      name: "Gas Lighter",
      category: "Home And Kitchen",
      price: 86,
      image: "public/products/Gas Lighter.png",
      rating: 4.2,
    },
    {
      name: "Bowl",
      category: "Home And Kitchen",
      price: 163,
      image: "public/products/bowl.png",
      rating: 4.1,
    },
    {
      name: "AirTight Container(24 pcs)",
      category: "Home And Kitchen",
      price:413 ,
      image: "public/products/AirTight Container(24 pcs).png",
      rating:4.2 ,
    },
    {
      name: "Water Bottle(1000 ml)",
      category: "Home And Kitchen",
      price:118 ,
      image: "public/products/water bottle.png",
      rating:4.4 ,
    },
    {
      name: "Modern Aprons",
      category: "Home And KItchen",
      price: 126,
      image: "public/products/apron.png",
      rating: 4.0,
    },
    {
      name: "Bed Pillows",
      category: "Home And Kitchen",
      price:366 ,
      image: "public/products/pillow.png",
      rating: 4.2,
    },
  
    
    {
      name: "Premium Mattress",
      category: "Home And Kitchen",
      price:6399,
      image: "public/products/mattress.png",
      rating: 3.9,
    },
    {
      name: "Stainless Steel Water Jug",
      category: "Home And Kitchen",
      price:350,
      image: "public/products/water jug.png",
      rating:4.7 ,
    },
    {
      name: "Floor Cleaning",
      category: "Home And Kitchen",
      price:299,
      image: "public/products/Floor Cleaning.png",
      rating:3.2 ,
    },
    {
      name: "Mosquito Net",
      category: "Home And Kitchen",
      price:286,
      image: "public/products/Mosquito Net.png",
      rating: 3.7,
    },
    {
      name:"Cetaphil Cleanser",
      category: "Beauty",
      price:280,
      image: "public/products/Cetaphil Cleanser.png",
      rating:4.1 ,
    },
    {
      name: "Ghar Magic Soap",
      category: "Beauty",
      price:146,
      image: "public/products/Ghar Magic Soap.png",
      rating:4 ,
    },
    {
      name: "Himalaya FaceWash",
      category: "Beauty",
      price:103,
      image: "public/products/himalaya.png",
      rating:4.3 ,
    },
    {
      name:"Charcoal Face Wash",
      category: "Beauty",
      price:267,
      image: "public/products/charcoal.png",
      rating:4.4 ,
    },
    {
      name: "Nivea Body Lotion",
      category: "Beauty",
      price:286,
      image: "public/products/nivea lotion.png",
      rating:4.5 ,
    },
    {
      name: "Plix Face Serum",
      category: "",
      price:140,
      image: "public/products/plix serum.png",
      rating:4.9 ,
    },
    {
      name: "Deconstruct 5% Niacinamide serum",
      category: "Beauty",
      price:1345,
      image: "public/products/deconstruct serum.png",
      rating:4,
    },
    {
      name: "Foxtale Moisturizer",
      category: "Beauty",
      price:381,
      image: "public/products/foxtale moisturier.png",
      rating:4.4 ,
    },

    {
      name: "Dermdoc Sunscreen",
      category: "Beauty",
      price:440,
      image: "public/products/derm doc.png",
      rating:4.2 ,
    },

    {
      name: "Dumbells(1kg)",
      category: "Sports",
      price:1337,
      image: "public/products/dumbells.png",
      rating:3.9 ,
    },

    {
      name: "Skipping Rope",
      category: "Sports",
      price:179,
      image: "public/products/Skipping Rope.png",
      rating:4.1 ,
    },

    {
      name: "Hand Gripper",
      category: "sports",
      price:150,
      image: "public/products/Hand Gripper.png",
      rating:4.2,
    },

    {
      name: "Table Tennis",
      category: "sports",
      price:809,
      image: "public/products/table tennis.png",
      rating:4.7 ,
    },

    {
      name: "Badminton Rackets",
      category: "Sports",
      price:275,
      image: "public/products/badminton racket.png",
      rating: 3.7,
    },

{
      name: "Tread Mill",
      category: "Sports",
      price:18999,
      image: "public/products/trenmill.png",
      rating:4.7 ,
    },


    {
      name: "Skate Board",
      category: "Sports",
      price:998,
      image: "public/products/Skate Board.png",
      rating: 4.3,
    },


    {
      name: "Car Freshner",
      category: "Car & Motor Bike",
      price:354,
      image: "public/products/car air freshner.png",
      rating:4.2 ,
    },

{
      name: "Horn For Car",
      category: "Car & Motor Bike",
      price:782,
      image: "public/products/car horn.png",
      rating:3.9 ,
    },

{
      name: "Bike Hand Grip Set",
      category: "Car & Motor Bike",
      price:250,
      image: "public/products/bike hand grip.png",
      rating:4.1 ,
    },

{
      name: "Brake And Clutch Lever Set",
      category: "Car & Motor Bike",
      price:299,
      image: "public/products/brake and clutch.png",
      rating:3.8 ,
    },








    
    
    
    
    

  ];

 

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [price, setPrice] = useState("All Prices");

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState("");
  const [page, setPage] = useState("products");
  

  
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All Categories" ||
      product.category === category;

    let matchesPrice = true;

    if (price === "Below ₹1,000") {
      matchesPrice = product.price < 1000;
    } else if (price === "₹1,000 - ₹5,000") {
      matchesPrice =
        product.price >= 1000 && product.price <= 5000;
    } else if (price === "Above ₹5,000") {
      matchesPrice = product.price > 5000;
    }

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice
    );
  });

 
  const addToCart = (product) => {
  const existingProduct = cart.find(
    (item) => item.name === product.name
  );

  if (existingProduct) {
    setCart(
      cart.map((item) =>
        item.name === product.name
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  } else {
    setCart([
      ...cart,
      {
        ...product,
        quantity: 1,
      },
    ]);
  }

  
  setNotification(`✅ ${product.name} added to cart!`);

  
  setTimeout(() => {
    setNotification("");
  }, 2000);
};
    


  const increaseQuantity = (index) => {
    setCart(
      cart.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

 

  const decreaseQuantity = (index) => {
    setCart(
      cart
        .map((item, i) =>
          i === index
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

 

  const removeFromCart = (index) => {
    setCart(
      cart.filter((_, cartIndex) => cartIndex !== index)
    );
  };

  

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  /* =========================
     TOTAL PRICE
  ========================= */

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  /* =========================
     CART PAGE
  ========================= */

  if (page === "cart") {
    return (
  <div className="app">

    {notification && (
      <div className="notification">
        {notification}
      </div>
    )}

    {/* TITLE */}
       {notification && (
  <div className="notification">
    {notification}
  </div>
)} 

        <h1>🛒 Your Cart</h1>

        <button
          className="back-button"
          onClick={() => setPage("products")}
        >
          ← Back to Products
        </button>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty 🛒</h2>

            <p>
              Add some products to your cart.
            </p>

            <button
              onClick={() => setPage("products")}
              className="continue-button"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="cart-page">

            {cart.map((item, index) => (
              <div
                className="cart-item"
                key={item.name}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-details">

                  <h2>{item.name}</h2>

                  <p>
                    Category: {item.category}
                  </p>

                  <h3>
                    ₹{item.price.toLocaleString("en-IN")}
                  </h3>

                  <div className="quantity">

                    <button
                      onClick={() =>
                        decreaseQuantity(index)
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(index)
                      }
                    >
                      +
                    </button>

                  </div>

                  <button
                    className="remove-button"
                    onClick={() =>
                      removeFromCart(index)
                    }
                  >
                    ❌ Remove
                  </button>

                </div>

              </div>
            ))}

            <div className="cart-total">

              <h2>
                Total Items: {totalItems}
              </h2>

              <h2>
                Total: ₹
                {totalPrice.toLocaleString("en-IN")}
              </h2>

              <button className="checkout-button">
                Proceed to Checkout
              </button>

            </div>

          </div>
        )}

      </div>
    );
  }

  /* =========================
     PRODUCTS PAGE
  ========================= */

  return (
    <div className="app">

      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}

      {/* TITLE */}

      <h1>
        🛍️ Product Search & Filter
      </h1>

      {/* CART BUTTON */}

      <div className="cart-top">

        <button
          className="cart-page-button"
          onClick={() => setPage("cart")}
        >
          🛒 Cart ({totalItems})
        </button>

      </div>

      {/* SEARCH */}

      <div className="search-box">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      {/* FILTERS */}

      <div className="filters">

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Beauty</option>
          <option>Home and Kitchen</option>
          <option>Sports</option>
          <option>Watches</option>
          <option>Car & Motor Bike</option>
          <option>Stationery</option>
        </select>

        <select
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
        >
          <option>All Prices</option>
          <option>Below ₹1,000</option>
          <option>₹1,000 - ₹5,000</option>
          <option>Above ₹5,000</option>
        </select>

      </div>

      {/* RESULT COUNT */}

      <p className="result-count">
        Showing {filteredProducts.length} products
      </p>

      {/* PRODUCTS */}

      <div className="products">

        {filteredProducts.map(
          (product, index) => (

            <div
              className="product-card"
              key={index}
            >

              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <h2>
                {product.name}
              </h2>

              <p>
                {product.category}
              </p>

              <h3>
                ₹
                {product.price.toLocaleString(
                  "en-IN"
                )}
              </h3>

              <p className="rating">
                ⭐ {product.rating} / 5
              </p>

              {/* VIEW PRODUCT */}

              <button
                onClick={() =>
                  setSelectedProduct(product)
                }
              >
                View Product
              </button>

              {/* ADD TO CART */}

              <button
                className="cart-button"
                onClick={() =>
                  addToCart(product)
                }
              >
                🛒 Add to Cart
              </button>

            </div>

          )
        )}

      </div>

      {/* NO PRODUCTS */}

      {filteredProducts.length === 0 && (
        <div className="no-products">

          <h2>
            No products found 😕
          </h2>

          <p>
            Try another search or filter.
          </p>

        </div>
      )}

      {/* PRODUCT POPUP */}

      {selectedProduct && (
        <div className="product-popup">

          <div className="popup-content">

            <button
              className="close-button"
              onClick={() =>
                setSelectedProduct(null)
              }
            >
              ×
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="popup-image"
            />

            <h2>
              {selectedProduct.name}
            </h2>

            <p>
              Category:{" "}
              {selectedProduct.category}
            </p>

            <h3>
              ₹
              {selectedProduct.price.toLocaleString(
                "en-IN"
              )}
            </h3>

            <p className="rating">
              ⭐ {selectedProduct.rating} / 5
            </p>

            <button
              className="popup-add-cart"
              onClick={() => {
                addToCart(selectedProduct);
                setSelectedProduct(null);
              }}
            >
              🛒 Add to Cart
            </button>

            <button
              className="popup-close"
              onClick={() =>
                setSelectedProduct(null)
              }
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;