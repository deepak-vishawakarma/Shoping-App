import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home({ Product,setindex }) {
  let navigate = useNavigate()
  return (
    <>
      <img
        className="w-full h-[80vh] object-cover mt-2"
        src="https://img.freepik.com/premium-photo/black-friday-concept-with-cart-space_23-2147709970.jpg?w=996"
        alt=""
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20 ">
        {Product.map((category) => (
          <div className="max-w-sm rounded-lg shadow-lg overflow-hidden border border-gray-200 bg-gray-200 hover:scale-95 transition-all duration-300">
            <img
              className="w-full h-48 object-cover"
              src={category.image}
              alt={category.name}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {category.name}
              </h2>
              <p className="text-gray-600 mt-2">{category.description}</p>
              <button className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300 mt-5"
              onClick={()=>{
                setindex(category.name)
                navigate("/Products")
              }
            }
              >

                More
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
