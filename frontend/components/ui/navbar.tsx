import { RedirectToSignIn } from "@clerk/nextjs"
import Image from "next/image"
import logo from '../../assets/filenest.png'


export const Navbar=()=>{
    return(
        <div className="flex justify-between w-screen items-center p-4 text-white">
            <div className="h-[150px] w-[150px]"><Image src={logo} alt="logo"></Image></div>
            <div className="flex items-center">
            </div>
        </div>  
    )
}