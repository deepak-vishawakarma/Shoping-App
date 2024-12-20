import React from 'react'
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom'
import Home from './Page/Home'
import Cart from './Page/Cart'
import Login from './Page/Login'
import Navbar from './Component/Navbar'
import { useState } from 'react'
import Products from './Page/Products'

export default function App() {

  let[Index,setindex] = useState()
  let[wishlist,setwishlist] = useState([])

  let [Product,Setproduct] = useState([
    {
      id: 1,
      name: "Grocery",
      description: "Daily essentials and fresh produce",
      image: "https://png.pngtree.com/thumb_back/fh260/background/20230721/pngtree-assorted-grocery-items-arranged-in-a-white-3d-rendering-of-a-image_3722980.jpg", 
    },
    {
      id: 2,
      name: "Electronics",
      description: "Latest gadgets and devices",
      image: "https://img.freepik.com/premium-photo/free-photo-laptop-electronic-devices-hardware-devices_1124573-13079.jpg?w=996", 
    },
    {
      id: 3,
      name: "Cloths",
      description: "Fashionable apparel and accessories",
      image: "https://img.freepik.com/free-photo/flatlay-outfit-travel_53876-138233.jpg?t=st=1734089121~exp=1734092721~hmac=fec701ad0933966239f9aec7d64ac378c08c1723f5cacbca7a4dbc1640555d33&w=826", 
    },
    {
      id: 4,
      name: "Mobile",
      description: "Smartphones and related accessories",
      image: "https://img.freepik.com/premium-photo/smartphone-black-screen-white-background_43665-33.jpg?w=826", 
    },
    {
      id: 5,
      name: "Kitchen Appliances",
      description: "Home and cooking essentials",
      image: "https://img.freepik.com/premium-photo/kitchen-appliances-isolated-white-background_1304645-25179.jpg?w=740", 
    },
    {
      id: 6,
      name: "Books",
      description: "Books and stationery for all ages",
      image: "https://img.freepik.com/free-photo/front-view-stacked-books-ladders-education-day_23-2149241046.jpg?t=st=1734089312~exp=1734092912~hmac=4d7c91c531202649677157adf4b0a6a49307f951d04f285696df06164b7a7f7d&w=826", 
    },
    {
      id: 7,
      name: "Toys",
      description: "Toys and games for children",
      image: "https://img.freepik.com/premium-photo/group-childrens-toys-white-background-constructor-pyramid-ball-soft-toys-children-s-development_150893-1861.jpg?w=826", 
    },
    {
      id: 8,
      name: "Sports Equipment",
      description: "Gear and equipment for various sports",
      image: "https://img.freepik.com/premium-photo/sport-fitness-healthy-lifestyle-technology-objects-concept-tablet-pc-computer-with-smartphone-sports-stuff-white-background_380164-145073.jpg?w=826", 
    },
    {
      id: 9,
      name: "Furniture",
      description: "Stylish furniture for home and office",
      image: "https://img.freepik.com/premium-photo/modern-furniture-background_469760-19835.jpg?w=826", 
    },
    {
      id: 10,
      name: "Beauty & Personal Care",
      description: "Cosmetics and grooming products",
      image: "https://img.freepik.com/free-photo/beauty-concept-with-different-products_23-2147817660.jpg?t=st=1734089512~exp=1734093112~hmac=a74cb08709ff680ecc54b98f5c8b41cce742291f2525f6486030888bdc116acc&w=826", 
    },
  ])

  return (
    <div>
      
        <BrowserRouter>

        <Navbar/>

        <Routes>

          <Route path='/' element ={<Home Product ={Product} setindex = {setindex}/>} />
          <Route path='/Cart' element ={<Cart wishlist={wishlist}/>} />
          <Route path='/Products' element ={<Products Index = {Index} setwishlist ={setwishlist}/>} />
          <Route path='/Login' element ={<Login/>} />

        </Routes>
        
        </BrowserRouter>
      
    </div>
  )
}
