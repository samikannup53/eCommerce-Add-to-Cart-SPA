const Cart = ({ cartItems, setShowModal }) => {
  return (
    <div
      className="relative flex items-center gap-2"
      onClick={() => setShowModal(true)}
    >
      <span className="absolute text-sm bg-[#fb641b] rounded-full px-[6px] font-semibold -top-2 left-3 text-white border-1 cursor-pointer">
        {cartItems.length}
      </span>
      <span className="text-lg font-semibold cursor-pointer text-white">
        <i class="fa-solid fa-cart-shopping"></i> &nbsp; Cart
      </span>
    </div>
  );
};

export default Cart;
