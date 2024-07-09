import React, { useState } from "react";

export default function App() {
  
  const [data, setData]=useState([
    {
      id: 1,
      quantity: 0,
      category: "mobiles",
      title: "Apple iPhone 14",
      imgSrc: "https://m.media-amazon.com/images/I/71xb2xkN5qL.SL1500.jpg",
      amazonLink: "https://amzn.to/3PuckZp",
      description: "Apple iPhone 14 (128 GB) - Blue",
      price: 29999,
    },
    {
      id: 2,
      quantity: 0,
      category: "mobiles",
      title: "Apple iPhone 11",
      imgSrc: "https://m.media-amazon.com/images/I/71xb2xkN5qL.SL1500.jpg",
      amazonLink: "https://amzn.to/44MiYi6",
      description: "Apple iPhone 11 (64GB) - White",
      price: 29999,
    },
    {
      id: 3,
      quantity: 0,
      category: "mobiles",
      title: "Apple iPhone 13",
      imgSrc: "https://m.media-amazon.com/images/I/71xb2xkN5qL.SL1500.jpg",
      amazonLink: "https://amzn.to/3r6XJtv",
      description: "Apple iPhone 13 (128GB) - Blue",
      price: 69999,
    },
    {
      id: 4,
      quantity: 0,
      category: "laptops",
      title: "Lenovo IdeaPad Slim 5 ",
      imgSrc: "https://m.media-amazon.com/images/I/71TPda7cwUL.SL1500.jpg",
      amazonLink: "https://amzn.to/44JsK4r",
      description: 'Lenovo IdeaPad Slim 5 Intel Core i5 12450H 14" (35.5cm) ',
      price: 29999,
    },
    {
      id: 5,
      quantity: 0,
      category: "laptops",
      title: "Xiaomi [Smartchoice] Notebookpro",
      imgSrc: "https://m.media-amazon.com/images/I/71TPda7cwUL.SL1500.jpg",
      amazonLink: "https://amzn.to/3EzeQaC",
      description: "Xiaomi [Smartchoice] Notebookpro ",
      price: 49999,
    },
    {
      id: 6,
      quantity: 0,
      category: "tablets",
      title: "Lenovo Tab P12 Pro AMOLED",
      imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL.SL1080.jpg",
      amazonLink: "https://amzn.to/3RabsdH",
      description:
        "Lenovo Tab P12 Pro AMOLED (12.6 inch (32 cm), 8 GB, 256 GB, Wi-fi Only), Storm Grey with Precision Pen 3",
      price: 19999,
    },
    {
      id: 7,
      quantity: 0,
      category: "tablets",
      title: "Xiaomi Pad 6",
      imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL.SL1080.jpg",
      amazonLink: "https://amzn.to/3ZeNRdY",
      description: "Xiaomi Pad 6| Qualcomm Snapdragon 870| ",
      price: 29999,
    },
    {
      id: 8,
      quantity: 0,
      category: "laptops",
      title: "Apple MacBook Air Laptop",
      imgSrc: "https://m.media-amazon.com/images/I/71TPda7cwUL.SL1500.jpg",
      amazonLink: "https://amzn.to/3r9rvhm",
      description:
        "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, ",
      price: 89999,
    },
    {
      id: 9,
      quantity: 0,
      category: "tablets",
      title: "Samsung Galaxy Tab A8",
      imgSrc: "https://m.media-amazon.com/images/I/51b9LjzmPCL.SL1080.jpg",
      amazonLink: "https://amzn.to/3Pdsh4F",
      description:
        "Samsung Galaxy Tab A8 26.69cm (10.5 inch) Display, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet, Gray, (SM-X200NZAEINU)",
      price: 49999,
    }
  ])

  const [count, setCount] = useState(0)

  function filterByProuct(product){
    const updatedData =data.filter((el)=>el.category===product)
    setData(updatedData)
  }

    return(
      <>
{/* --------------Heading Part -------------*/}

      <div className=" ">
        <header className="bg-slate-500 flex flex-wrap justify-around p-4">
          <div>
            <h1 className="text-amber-500 font-bold text-[20px]">LOGO</h1>
          </div>
          <div className="flex text-gray-400">
            <input type="text" placeholder="Search... " className="mx-[-50px] w-[350px] rounded-md border-[2px] border-amber-500"/>
            <span className="text-[25px]  px-[20px]"><i class="fa-solid fa-magnifying-glass-arrow-right"></i></span>
          </div>
          <div className="text-[25px] text-amber-500">
            <h1>
              <i class="fa-solid fa-cart-shopping"></i>
              <span className="text-[15px] relative top-[-25px] left-[-10px] bg-red-900 p-0.5 w-[20px] h-[20px] justify-center text-gray-50 font-bold rounded-full">{count}</span>
            </h1>
          </div>
        </header>
      </div>


{/* ---------------Catagory list -------------*/}


      <div className="flex flex-wrap w-100%">
        <div className="catagory bg-orange-600 h-100% p-10">
          <ul className="list-none text-[20px] text-gray-50 font-medium w-100%">
            <li><a href="#" onClick={() => filterByProuct("mobiles")}>Mobile</a></li>
            <li><a href="#" onClick={() => filterByProuct("tablets")}>Tablet</a></li>        
            <li><a href="#" onClick={() => filterByProuct("laptops")}>Laptop</a></li>        
            <li><a href="#" onClick={() => filterByProuct("price")}>Price</a></li>
          </ul>
        </div>


{/* ---------------Product Part ----------------- */}


        <div className="flex flex-wrap gap-[10px] justify-center items-center bg-slate-400">  
          {data.map((e) => {
            return (
              <>
                <div className="w-[400px] text-center relative overflow-hidden">
                  <button className="bg-orange-600 text-cyan-50 text-[17px] translate-x-40 translate-y-5 px-[20px] py-[5px]">{e.price} BDT </button>
                  <img src={e.imgSrc} alt="img" className="border-[1px] w-full border-red-300"/>
                  <div className="my-[20px]">
                    <h1 className="font-bold text-[17px]">{e.title}</h1>
                    <p className="h-10">{e.description}</p>
                  </div>
                  <div className="flex gap-[10px] justify-center w-full p-6 rounded-full">
                    <button className="bg-rose-700 text-white px-[10px] mx-[5px] py-[5px] ">For Details</button>
                    <button className="bg-lime-700 text-white px-[10px] py-[5px]">Buy Now</button>
                  </div>
                </div>
              </>  
            )
          })}
        </div>
      </div>
      </>
    );
      
}
