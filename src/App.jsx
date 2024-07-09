import React, { useState } from "react";
import {items} from "./db"
import About from "./About";

export default function App() {
  
  const [data, setData]=useState([
    items
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

      <About newdata={
        data
      }/> 

      </>
    );

      
}
