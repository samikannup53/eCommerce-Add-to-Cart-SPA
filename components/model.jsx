const Model = ({ setShowModal, cartItems, removeFromCart }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800/50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-xl relative">
        <h2 className="text-xl font-bold mb-4 pl-4">Cart Items</h2>
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 w-[70vw] max-w-[1000px] h-[60vh] border-t-2 border-gray-300">
            <img src="/empty-cart-image.png" className="w-48 mr-3" />
            <p className="text-center text-lg">Your Cart is Empty!</p>
            <p className="text-center text-[12px] -mt-3">Add Items to it Now.</p>
            <button
                onClick={() => setShowModal(false)}
                className="text-sm bg-[#fb641b] px-5 py-2 rounded-sm hover:bg-[#2455f4] font-semibold text-white cursor-pointer"
              >
                <i class="fa-solid fa-cart-shopping"></i> &nbsp; SHOPE NOW
              </button>
          </div>
        ) : (
          <div className="space-y-8 overflow-y-scroll max-h-[60vh] w-[70vw] max-w-[1000px] pr-10 pl-4 border-t-2 border-gray-300 py-8">
            {cartItems.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center py-2">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-18 h-18 flex items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="w-full text-[17px] text-center sm:text-left sm:w-70 lg:w-100">{item.title}</p>
                    <p className="text-center text-[18px] sm:text-left text-gray-700 font-semibold py-3 sm:py-0">₹&nbsp;{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className=" text-sm font-bold sm:ml-auto cursor-pointer text-gray-800  hover:text-[#2455f4] border-[1px] border-gray-800 hover:border-[#2455f4] rounded-sm pl-2 pr-3 py-1 "
                ><i class="bi bi-trash"></i>&nbsp;
                  REMOVE
                </button>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-8 text-2xl font-semibold text-gray-500 hover:text-black"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Model;
