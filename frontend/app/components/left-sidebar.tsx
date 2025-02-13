"use client"
import { useRouter } from 'next/router';

export const LeftSidebar:React.FC=()=>{
    const router=useRouter();
    return(
        <div className="h-screen w-1/6 bg-gray-800">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="text-white text-4xl font-bold">FileNest</div>
                <div className="text-2xl font-bold text-white">Home</div>
                <div className="text-2xl font-bold text-white">Share File</div>
                <div className="text-2xl font-bold text-white hover:cursor-pointer" onClick={()=>router.push('/upload')} >Upload</div>
                <div className="text-2xl font-bold text-white">Delete</div>

            </div>
        </div>
    )
}