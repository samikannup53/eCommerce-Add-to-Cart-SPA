import { useEffect, useState } from "react";

const HomePage = ({ addToCart }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.log("Error in fetching:", error));
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className=" bg-[#EFF7F6] p-4">
      <div className="container mx-auto flex flex-wrap gap-4 justify-center">
        {post.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%]  bg-white p-4 flex flex-col"
          >
            <div className="w-full h-50 flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-auto h-full object-fit"
              />
            </div>
            <div className="flex flex-col items-center flex-grow text-center space-y-3 mt-3">
              <h1 className="font-semibold text-[17px] text-gray-900">{item.title}</h1>
              <p className="text-lg font-bold text-[19px] text-gray-800">₹ &nbsp;{item.price}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="text-sm bg-[#fb641b] px-5 py-2 rounded-sm hover:bg-[#2455f4] font-semibold text-white cursor-pointer mt-auto"
              >
                <i class="fa-solid fa-cart-shopping"></i> &nbsp; ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
