import React from 'react'
import img from './img.jpg'
import Image from "next/image";

const page = () => {
  return (
    <div>
    <section className=" min-height[100vh] py-1.5 pr-[12%] flex items-center justify-center" >
    <div className="flex flex-col mt-10 ">
        <h1 className='text-5xl text-black text-bold'>Hi, Its me <span className='text-[#59c6da] text-6xl text-extrabold '> <strong>Aqsa Zaib</strong></span></h1>
        <p className='max-w-screen-lg  text-4xl px-2.5 py-2.5 mt-5 text-black'>
        Iam an aspiring developer with a passion for coding and technology.
I am currently focused on learning the fundamentals of web development etc. I love working on projects that challenge me to grow and improve my skills.
        </p>
    </div>
    <div className=''>
<Image className ="relative top-12 w-[30vw] rounded-full h-[30vw] object-cover mt-20 left-56 cursor-pointer ease-in-out[0.4s]]"
src={img} 
alt='img' />
</div>
    </section>
    </div>

  )
}

export default page