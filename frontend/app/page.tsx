"use client"

import FadingDotsBackground from "../components/ui/fading-dots-background";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/ui/navbar";
import {useRouter} from "next/navigation";


const bebasNeue= Bebas_Neue({
  variable:'--font-bebas-neue',
  weight:"400"
});

export default function Home(){
  const router=useRouter();

   
  return(
    <>
    <div className="z-1">
      <FadingDotsBackground/>
    </div>
    <div className="z-20 text-xl text-white absolute"><Navbar/>

    </div>
    <div className="w-screen h-screen flex items-center justify-center">
    <div className="z-20 text-white flex flex-col items-center">
        <h1 className={`${bebasNeue.className} text-8xl font-bold mb-4 `}><span className="animate">Welcome to</span> <span className="animate-2">FileNest</span></h1>
        <p onClick={()=>{router.push('/dashboard')}}className={`${bebasNeue.className} text-[40px] animate-2 flex flex-row items-center hover:cursor-pointer transition-all duration-300 hover:text-[50px] hover:text-gray-500`}>A blazing fast way to share files<span className="ml-[6px]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
</span></p>
      </div>

    </div>
    
    </>
  )
}