const Model = ({ setShowModal, cartItems, removeFromCart }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800/50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-xl relative">
        <h2 className="text-xl font-bold mb-4 pl-4">Cart Items</h2>
        {cartItems.length === 0 ? (
          <p className="w-100 h-20 text-center mt-8">Your Cart is Empty !</p>
        ) : (
          <div className="space-y-3 overflow-y-scroll h max-h-[60vh] w-[50vw] pr-10 pl-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center gap-6 py-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover"
                    />
                  </div>
                  <div>
                  <p className="w-100">{item.title}</p>
                  <p>{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className=" text-sm font-bold ml-auto"
                >
                  Remove
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
