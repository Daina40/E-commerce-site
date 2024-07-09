import React from 'react'

export default function About({newdata}) {
    const imageList = [
        {
            image: "./image/MST. TASLIMA AKTER DAINA.jpg"
        },
        {
            image: "./image/MST. TASLIMA AKTER DAINA.jpg"
        },
        {
            image: "./image/MST. TASLIMA AKTER DAINA.jpg"
        },
        {
            image: "./image/MST. TASLIMA AKTER DAINA.jpg"
        }
    ]
  return (
    <>
    {imageList.map((e)=>{
        return (
            <>
            <img src={e.image} alt="" />
            
            </>
        )
    })}
    <div>
        <h1>This is Map section</h1>
    </div>
    </>
    
  )

}
