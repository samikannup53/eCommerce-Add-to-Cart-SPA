import HomePage from "/components/homepage";
import Cart from "/components/cart";
import Model from "/components/model";
import { useState } from "react";

const Header = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (item) => {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      alert("This item is already added to the cart.");
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="bg-[#2874f0] sticky top-0 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="">
            <div className="flex items-center gap-2">
              <img src="./logo-white.svg" className="w-8" />
              <h1 className="text-white text-xl font-semibold">ShoppyCart</h1>
            </div>
          </a>
          <Cart cartItems={cartItems} setShowModal={setShowModal} />
        </div>
      </div>
      <HomePage addToCart={addToCart} />
      {showModal && (
        <Model
          setShowModal={setShowModal}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />
      )}
    </>
  );
};

export default Header;
