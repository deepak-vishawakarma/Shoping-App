import React from 'react'

export default function Cart({wishlist}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20 ">
      {
        wishlist.map((e)=>(
          <div className="max-w-sm rounded-lg shadow-lg overflow-hidden border border-gray-200 bg-gray-200 hover:scale-95 transition-all duration-300">
            <img
              className="w-full h-48 object-cover"
              src={e.image}
              alt={e.name}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {e.name}
              </h2>
              <p className="text-gray-600 mt-2">{e.description}</p>
              <button className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300 mt-5"
              >
                
                Buy Now...
              </button>
              
            </div>
          </div>
        ))
      }
    </div>
  )
}
