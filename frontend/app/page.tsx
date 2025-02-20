import FadingDotsBackground from "./components/fading-dots-background";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";


const bebasNeue= Bebas_Neue({
  variable:'--font-bebas-neue',
  weight:"400"
});

export default function Home(){
 
   
  return(
    <>
    <div className="z-1">
      <FadingDotsBackground/>
    </div>
    <div className="w-screen h-screen flex items-center justify-center">
    <div className="z-20 text-white flex flex-col items-center">
        <h1 className={`${bebasNeue.className} text-8xl font-bold mb-4 `}><span className="animate">Welcome to</span> <span className="animate-2">FileNest</span></h1>
        <p className={`${bebasNeue.className} text-4xl animate-2`}>A blazing fast way to share files</p>
      </div>

    </div>
    
    </>
  )
}