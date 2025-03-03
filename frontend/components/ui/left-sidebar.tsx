"use client"
import { useRouter } from "next/navigation"

interface Props {
    imageUrl: string;
    
}

export const LeftSidebar: React.FC<Props> = (props) => {
    const router=useRouter();
    return(
        <div className="h-screen w-[200px] bg-gray-800">
            <div className="flex flex-col items-start ml-[20px] justify-center h-full">
                <div className="h-[45px] w-[45px] "><img className="rounded-full"src={props.imageUrl}></img></div>
                <div className="text-2xl font-bold text-white">Home</div>
                <div className="text-2xl font-bold text-white">Share File</div>
                <div className="text-2xl font-bold text-white hover:cursor-pointer" onClick={()=>router.push('/upload')} >Upload</div>
                <div className="text-2xl font-bold text-white">Delete</div>

            </div>
        </div>
    )
}