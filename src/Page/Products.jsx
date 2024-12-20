import React from "react";
import { useState } from "react";
import Popup from "reactjs-popup";
import Login from "./Login";

export default function Products({ Index, setwishlist }) {
  let [Itemlist, setitemlist] = useState([
    {
      name: "Apple",
      image: "apple.jpg",
      price: 120,
      description:
        "Fresh red apples, rich in nutrients and perfect for snacking.",
      category: "Grocery",
    },
    {
      name: "Banana",
      image: "banana.jpg",
      price: 60,
      description: "Ripe and sweet bananas, ideal for a quick energy boost.",
      category: "Grocery",
    },
    {
      name: "Rice",
      image: "rice.jpg",
      price: 450,
      description:
        "Premium long-grain rice, suitable for all types of cuisines.",
      category: "Grocery",
    },
    {
      name: "Milk",
      image: "milk.jpg",
      price: 50,
      description: "Pure and fresh full cream milk for your daily nutrition.",
      category: "Grocery",
    },
    {
      name: "Eggs",
      image: "eggs.jpg",
      price: 150,
      description:
        "Farm-fresh eggs with rich protein content for a healthy diet.",
      category: "Grocery",
    },
    {
      name: "Bread",
      image: "bread.jpg",
      price: 40,
      description: "Soft and fresh whole wheat bread, perfect for sandwiches.",
      category: "Grocery",
    },
    {
      name: "Sugar",
      image: "sugar.jpg",
      price: 42,
      description:
        "Refined white sugar, great for sweetening beverages and desserts.",
      category: "Grocery",
    },
    {
      name: "Potatoes",
      image: "potatoes.jpg",
      price: 30,
      description:
        "Fresh and versatile potatoes, ideal for a variety of dishes.",
      category: "Grocery",
    },
    {
      name: "Tomatoes",
      image: "tomatoes.jpg",
      price: 45,
      description:
        "Juicy and fresh tomatoes, essential for cooking and salads.",
      category: "Grocery",
    },
    {
      name: "Onions",
      image: "onions.jpg",
      price: 35,
      description:
        "Freshly harvested onions, a staple ingredient for most recipes.",
      category: "Grocery",
    },
    {
      name: "Smartphone",
      image: "smartphone.jpg",
      price: 15000,
      description:
        "Latest smartphone with a high-resolution display and powerful processor.",
      category: "Electronics",
    },
    {
      name: "Laptop",
      image: "laptop.jpg",
      price: 55000,
      description:
        "Lightweight laptop with 16GB RAM and a 512GB SSD, ideal for work and entertainment.",
      category: "Electronics",
    },
    {
      name: "Smartwatch",
      image: "smartwatch.jpg",
      price: 5000,
      description:
        "Stylish smartwatch with health tracking and notification support.",
      category: "Electronics",
    },
    {
      name: "Bluetooth Headphones",
      image: "bluetooth_headphones.jpg",
      price: 3000,
      description:
        "Wireless over-ear headphones with noise cancellation and superior sound quality.",
      category: "Electronics",
    },
    {
      name: "Television",
      image: "television.jpg",
      price: 40000,
      description:
        "55-inch 4K Ultra HD Smart TV with HDR support and built-in streaming apps.",
      category: "Electronics",
    },
    {
      name: "Refrigerator",
      image: "refrigerator.jpg",
      price: 25000,
      description:
        "Double-door refrigerator with advanced cooling and energy-saving features.",
      category: "Electronics",
    },
    {
      name: "Microwave Oven",
      image: "microwave_oven.jpg",
      price: 8000,
      description:
        "Compact microwave oven with pre-programmed settings for convenient cooking.",
      category: "Electronics",
    },
    {
      name: "Gaming Console",
      image: "gaming_console.jpg",
      price: 35000,
      description:
        "Next-gen gaming console with immersive graphics and exclusive game titles.",
      category: "Electronics",
    },
    {
      name: "Air Conditioner",
      image: "air_conditioner.jpg",
      price: 30000,
      description:
        "Split AC with energy-efficient inverter technology for effective cooling.",
      category: "Electronics",
    },
    {
      name: "Camera",
      image: "camera.jpg",
      price: 45000,
      description:
        "DSLR camera with 24.2 MP sensor and 4K video recording capabilities.",
      category: "Electronics",
    },
    {
      name: "T-Shirt",
      image: "tshirt.jpg",
      price: 500,
      description: "Comfortable cotton t-shirt available in multiple colors.",
      category: "Cloths",
    },
    {
      name: "Jeans",
      image: "jeans.jpg",
      price: 1200,
      description: "Slim-fit denim jeans perfect for casual outings.",
      category: "Cloths",
    },
    {
      name: "Formal Shirt",
      image: "formal_shirt.jpg",
      price: 1500,
      description: "Stylish formal shirt suitable for office and events.",
      category: "Cloths",
    },
    {
      name: "Jacket",
      image: "jacket.jpg",
      price: 3000,
      description: "Warm and lightweight jacket, ideal for winter seasons.",
      category: "Cloths",
    },
    {
      name: "Saree",
      image: "saree.jpg",
      price: 2500,
      description: "Elegant silk saree with intricate embroidery.",
      category: "Cloths",
    },
    {
      name: "Kurta",
      image: "kurta.jpg",
      price: 1200,
      description: "Cotton kurta with a modern design, perfect for festivals.",
      category: "Cloths",
    },
    {
      name: "Skirt",
      image: "skirt.jpg",
      price: 800,
      description:
        "Flared midi skirt in vibrant patterns, great for casual wear.",
      category: "Cloths",
    },
    {
      name: "Track Pants",
      image: "track_pants.jpg",
      price: 1000,
      description: "Stretchable track pants for gym and casual use.",
      category: "Cloths",
    },
    {
      name: "Blazer",
      image: "blazer.jpg",
      price: 4500,
      description: "Tailored blazer for formal occasions and meetings.",
      category: "Cloths",
    },
    {
      name: "Sweater",
      image: "sweater.jpg",
      price: 2000,
      description: "Woolen sweater with a soft texture for chilly weather.",
      category: "Cloths",
    },
    {
      name: "iPhone 14",
      image: "iphone14.jpg",
      price: 79999,
      description:
        "Apple iPhone 14 with A15 Bionic chip and stunning camera performance.",
      category: "Mobile",
    },
    {
      name: "Samsung Galaxy S23",
      image: "galaxy_s23.jpg",
      price: 74999,
      description:
        "Premium Android smartphone with Snapdragon 8 Gen 2 and 120Hz AMOLED display.",
      category: "Mobile",
    },
    {
      name: "OnePlus 11",
      image: "oneplus_11.jpg",
      price: 56999,
      description:
        "High-performance smartphone with Hasselblad camera and sleek design.",
      category: "Mobile",
    },
    {
      name: "Google Pixel 7",
      image: "pixel7.jpg",
      price: 59999,
      description:
        "Google’s flagship smartphone with Tensor G2 chip and best-in-class photography.",
      category: "Mobile",
    },
    {
      name: "Redmi Note 12 Pro",
      image: "redmi_note_12_pro.jpg",
      price: 24999,
      description:
        "Affordable smartphone with powerful performance and 120Hz AMOLED display.",
      category: "Mobile",
    },
    {
      name: "Vivo V27 Pro",
      image: "vivo_v27_pro.jpg",
      price: 36999,
      description:
        "Stylish smartphone with curved display and professional-grade camera.",
      category: "Mobile",
    },
    {
      name: "Realme GT Neo 5",
      image: "realme_gt_neo5.jpg",
      price: 32999,
      description:
        "Powerful gaming phone with 240W fast charging and AMOLED display.",
      category: "Mobile",
    },
    {
      name: "Oppo Reno 10",
      image: "oppo_reno10.jpg",
      price: 42999,
      description:
        "Feature-packed smartphone with sleek design and advanced portrait camera.",
      category: "Mobile",
    },
    {
      name: "Moto Edge 40",
      image: "moto_edge_40.jpg",
      price: 29999,
      description:
        "5G smartphone with OLED display, curved edges, and clean Android experience.",
      category: "Mobile",
    },
    {
      name: "Asus ROG Phone 7",
      image: "rog_phone_7.jpg",
      price: 79999,
      description:
        "Gaming beast with Snapdragon 8 Gen 2, 165Hz display, and dedicated cooling system.",
      category: "Mobile",
    },
    {
      name: "Microwave Oven",
      image: "microwave_oven.jpg",
      price: 8000,
      description:
        "Compact microwave oven with pre-programmed cooking settings for convenience.",
      category: "Kitchen Appliance",
    },
    {
      name: "Refrigerator",
      image: "refrigerator.jpg",
      price: 25000,
      description:
        "Energy-efficient double-door refrigerator with advanced cooling technology.",
      category: "Kitchen Appliance",
    },
    {
      name: "Blender",
      image: "blender.jpg",
      price: 2000,
      description:
        "Powerful blender with multiple speed settings for smoothies and sauces.",
      category: "Kitchen Appliance",
    },
    {
      name: "Toaster",
      image: "toaster.jpg",
      price: 1500,
      description:
        "Two-slice toaster with adjustable browning settings and quick toasting.",
      category: "Kitchen Appliance",
    },
    {
      name: "Coffee Maker",
      image: "coffee_maker.jpg",
      price: 5000,
      description:
        "Programmable coffee maker with a built-in grinder for fresh brews.",
      category: "Kitchen Appliance",
    },
    {
      name: "Dishwasher",
      image: "dishwasher.jpg",
      price: 35000,
      description:
        "Automatic dishwasher with multiple wash programs and energy-saving features.",
      category: "Kitchen Appliance",
    },
    {
      name: "Air Fryer",
      image: "air_fryer.jpg",
      price: 7000,
      description:
        "Healthier alternative to frying with hot air circulation for crispy results.",
      category: "Kitchen Appliance",
    },
    {
      name: "Juicer",
      image: "juicer.jpg",
      price: 3000,
      description:
        "Compact juicer for extracting fresh juices from fruits and vegetables.",
      category: "Kitchen Appliance",
    },
    {
      name: "Induction Cooktop",
      image: "induction_cooktop.jpg",
      price: 4000,
      description:
        "Portable induction cooktop with touch controls and fast heating.",
      category: "Kitchen Appliance",
    },
    {
      name: "Pressure Cooker",
      image: "pressure_cooker.jpg",
      price: 2000,
      description:
        "Stainless steel pressure cooker for fast and energy-efficient cooking.",
      category: "Kitchen Appliance",
    },
    {
      name: "The Alchemist",
      image: "the_alchemist.jpg",
      price: 400,
      description:
        "A philosophical novel by Paulo Coelho about following your dreams and destiny.",
      category: "Books",
    },
    {
      name: "Atomic Habits",
      image: "atomic_habits.jpg",
      price: 500,
      description:
        "James Clear’s guide to building good habits and breaking bad ones.",
      category: "Books",
    },
    {
      name: "1984",
      image: "1984.jpg",
      price: 350,
      description:
        "George Orwell's dystopian novel exploring themes of surveillance and totalitarianism.",
      category: "Books",
    },
    {
      name: "Sapiens: A Brief History of Humankind",
      image: "sapiens.jpg",
      price: 600,
      description:
        "Yuval Noah Harari's exploration of the history and future of humanity.",
      category: "Books",
    },
    {
      name: "To Kill a Mockingbird",
      image: "to_kill_a_mockingbird.jpg",
      price: 450,
      description:
        "Harper Lee’s timeless story of morality and justice in the Deep South.",
      category: "Books",
    },
    {
      name: "Rich Dad Poor Dad",
      image: "rich_dad_poor_dad.jpg",
      price: 300,
      description:
        "Robert Kiyosaki’s personal finance classic about building wealth and financial literacy.",
      category: "Books",
    },
    {
      name: "The Subtle Art of Not Giving a F*ck",
      image: "the_subtle_art.jpg",
      price: 400,
      description:
        "Mark Manson’s approach to living a good life by embracing life's challenges.",
      category: "Books",
    },
    {
      name: "Pride and Prejudice",
      image: "pride_and_prejudice.jpg",
      price: 350,
      description:
        "Jane Austen’s beloved romantic novel about love and social status.",
      category: "Books",
    },
    {
      name: "Harry Potter and the Sorcerer’s Stone",
      image: "harry_potter.jpg",
      price: 450,
      description:
        "The first book in J.K. Rowling’s magical Harry Potter series.",
      category: "Books",
    },
    {
      name: "The Power of Now",
      image: "the_power_of_now.jpg",
      price: 500,
      description:
        "Eckhart Tolle’s spiritual guide to mindfulness and living in the present moment.",
      category: "Books",
    },
    {
      name: "Lego Classic Bricks",
      image: "lego_classic.jpg",
      price: 1500,
      description:
        "A creative building set with colorful Lego bricks to inspire imagination.",
      category: "Toys",
    },
    {
      name: "Remote Control Car",
      image: "rc_car.jpg",
      price: 2500,
      description:
        "High-speed remote control car with rechargeable battery and durable build.",
      category: "Toys",
    },
    {
      name: "Barbie Doll",
      image: "barbie_doll.jpg",
      price: 1200,
      description:
        "Fashionable Barbie doll with stylish outfits and accessories.",
      category: "Toys",
    },
    {
      name: "Puzzle Cube",
      image: "puzzle_cube.jpg",
      price: 300,
      description:
        "3x3 puzzle cube to challenge and enhance problem-solving skills.",
      category: "Toys",
    },
    {
      name: "Action Figure",
      image: "action_figure.jpg",
      price: 800,
      description:
        "Highly detailed action figure from a popular superhero franchise.",
      category: "Toys",
    },
    {
      name: "Stuffed Teddy Bear",
      image: "teddy_bear.jpg",
      price: 1000,
      description:
        "Soft and cuddly teddy bear, perfect as a comforting toy for kids.",
      category: "Toys",
    },
    {
      name: "Building Blocks",
      image: "building_blocks.jpg",
      price: 600,
      description:
        "Colorful building blocks to help kids develop motor skills and creativity.",
      category: "Toys",
    },
    {
      name: "Train Set",
      image: "train_set.jpg",
      price: 3500,
      description:
        "Electric train set with tracks and a realistic locomotive design.",
      category: "Toys",
    },
    {
      name: "Musical Keyboard Toy",
      image: "keyboard_toy.jpg",
      price: 1800,
      description:
        "Mini keyboard for kids to explore music and develop auditory skills.",
      category: "Toys",
    },
    {
      name: "Flying Drone Toy",
      image: "drone_toy.jpg",
      price: 4000,
      description:
        "Lightweight drone with easy controls and a built-in camera for fun aerial play.",
      category: "Toys",
    },
    {
      name: "Cricket Bat",
      image: "cricket_bat.jpg",
      price: 2500,
      description:
        "Premium grade cricket bat made from high-quality English willow.",
      category: "Sports Equipment",
    },
    {
      name: "Football",
      image: "football.jpg",
      price: 1200,
      description:
        "Durable and lightweight football, perfect for matches and practice.",
      category: "Sports Equipment",
    },
    {
      name: "Badminton Racket",
      image: "badminton_racket.jpg",
      price: 1500,
      description:
        "Lightweight badminton racket with a sturdy frame for precise shots.",
      category: "Sports Equipment",
    },
    {
      name: "Yoga Mat",
      image: "yoga_mat.jpg",
      price: 800,
      description:
        "Non-slip yoga mat for fitness routines and stretching exercises.",
      category: "Sports Equipment",
    },
    {
      name: "Basketball",
      image: "basketball.jpg",
      price: 1000,
      description:
        "High-grip basketball designed for both indoor and outdoor play.",
      category: "Sports Equipment",
    },
    {
      name: "Tennis Ball",
      image: "tennis_ball.jpg",
      price: 400,
      description:
        "Pack of three durable tennis balls for long-lasting performance.",
      category: "Sports Equipment",
    },
    {
      name: "Skipping Rope",
      image: "skipping_rope.jpg",
      price: 500,
      description:
        "Adjustable-length skipping rope for cardio and endurance training.",
      category: "Sports Equipment",
    },
    {
      name: "Hockey Stick",
      image: "hockey_stick.jpg",
      price: 3000,
      description:
        "Ergonomically designed hockey stick for better grip and control.",
      category: "Sports Equipment",
    },
    {
      name: "Gym Gloves",
      image: "gym_gloves.jpg",
      price: 700,
      description:
        "Padded gym gloves to provide extra grip and comfort during workouts.",
      category: "Sports Equipment",
    },
    {
      name: "Table Tennis Paddle",
      image: "table_tennis_paddle.jpg",
      price: 1200,
      description:
        "High-performance paddle with excellent grip and spin control.",
      category: "Sports Equipment",
    },
    {
      name: "Sofa Set",
      image: "sofa_set.jpg",
      price: 25000,
      description:
        "Comfortable 3-seater sofa set with soft cushions and elegant design.",
      category: "Furniture",
    },
    {
      name: "Dining Table",
      image: "dining_table.jpg",
      price: 15000,
      description:
        "Wooden dining table with 6 chairs, perfect for family gatherings.",
      category: "Furniture",
    },
    {
      name: "Bed Frame",
      image: "bed_frame.jpg",
      price: 12000,
      description:
        "Sturdy wooden bed frame with a contemporary design and ample space for storage.",
      category: "Furniture",
    },
    {
      name: "Office Chair",
      image: "office_chair.jpg",
      price: 4000,
      description:
        "Ergonomic office chair with adjustable height and lumbar support for comfort.",
      category: "Furniture",
    },
    {
      name: "Coffee Table",
      image: "coffee_table.jpg",
      price: 5000,
      description:
        "Stylish glass coffee table with a sleek metal frame, ideal for living rooms.",
      category: "Furniture",
    },
    {
      name: "Bookshelf",
      image: "bookshelf.jpg",
      price: 8000,
      description:
        "Modern bookshelf with multiple shelves to organize books and decor items.",
      category: "Furniture",
    },
    {
      name: "Wardrobe",
      image: "wardrobe.jpg",
      price: 15000,
      description:
        "Spacious wardrobe with sliding doors and plenty of hanging space.",
      category: "Furniture",
    },
    {
      name: "Side Table",
      image: "side_table.jpg",
      price: 3000,
      description:
        "Compact side table with a storage drawer, perfect for bedrooms or living rooms.",
      category: "Furniture",
    },
    {
      name: "Recliner Chair",
      image: "recliner_chair.jpg",
      price: 12000,
      description:
        "Leather recliner chair with adjustable backrest and footrest for maximum relaxation.",
      category: "Furniture",
    },
    {
      name: "TV Unit",
      image: "tv_unit.jpg",
      price: 7000,
      description:
        "Modern TV unit with ample storage space for media devices and decor.",
      category: "Furniture",
    },
    {
      name: "Moisturizing Cream",
      image: "moisturizing_cream.jpg",
      price: 800,
      description:
        "Hydrating cream enriched with natural oils to nourish and protect your skin.",
      category: "Beauty & Personal Care",
    },
    {
      name: "Hair Serum",
      image: "hair_serum.jpg",
      price: 1200,
      description:
        "Lightweight serum that adds shine and smoothness to your hair while controlling frizz.",
      category: "Beauty & Personal Care",
    },
    {
      name: "Face Wash",
      image: "face_wash.jpg",
      price: 600,
      description:
        "Gentle face wash with natural ingredients to cleanse and refresh your skin.",
      category: "Beauty & Personal Care",
    },
    {
      name: "Shampoo",
      image: "shampoo.jpg",
      price: 400,
      description:
        "Nourishing shampoo that promotes healthy hair growth and adds volume.",
      category: "Beauty & Personal Care",
    },
    {
      name: "Lip Balm",
      image: "lip_balm.jpg",
      price: 250,
      description:
        "Soothing lip balm to hydrate and protect lips from dryness and cracking.",
      category: "Beauty & Personal Care",
    },
    {
      name: "Body Lotion",
      image: "body_lotion.jpg",
      price: 700,
      description:
        "Luxurious body lotion that deeply moisturizes and softens your skin.",
      category: "Beauty & Personal Care",
    },
    {
      name: "Nail Polish",
      image: "nail_polish.jpg",
      price: 300,
      description:
        "Long-lasting nail polish with vibrant colors for beautiful nails.",
      category: "Beauty & Personal Care",
    },
    {
      name: "Deodorant Spray",
      image: "deodorant_spray.jpg",
      price: 350,
      description:
        "Refreshing deodorant spray with a long-lasting fragrance to keep you fresh.",
      category: "Beauty & Personal Care",
    },
    {
      name: "Face Mask",
      image: "face_mask.jpg",
      price: 500,
      description:
        "Purifying face mask that detoxifies and revitalizes your skin.",
      category: "Beauty & Personal Care",
    },
    {
      name: "Shaving Razor",
      image: "shaving_razor.jpg",
      price: 350,
      description:
        "Precision shaving razor for a smooth and comfortable shave.",
      category: "Beauty & Personal Care",
    },
  ]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20 ">
        {Itemlist.filter((a) => a.category === Index).map((e) => (
          <div className="max-w-sm rounded-lg shadow-lg overflow-hidden border border-gray-200 bg-gray-200 hover:scale-95 transition-all duration-300">
            <img
              className="w-full h-48 object-cover"
              src={e.image}
              alt={e.name}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{e.name}</h2>
              <p className="text-gray-600 mt-2">{e.description}</p>
              <button
                className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300 mt-5 mr-5"
                onClick={() => setwishlist((pre) => [...pre, e])}
              >
                Add to cart
              </button>

                <Popup
                  trigger={
                    <button className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300">
                      Buy Now
                    </button>
                  }
                  modal
                  closeOnDocumentClick
                >
                  <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Login</h2>
                    <Login />
                  </div>
                </Popup>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
