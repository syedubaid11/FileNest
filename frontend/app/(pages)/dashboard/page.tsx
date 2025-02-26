"use client"

import { LeftSidebar } from "@/app/components/left-sidebar"
import { Button } from "@/app/components/ui/button"
import axios from "axios"

//returns react node/children components 
interface DashboardProps{
    children:React.ReactNode,
}

export default function Dashboard(){
    return(
        <div className="flex gap-[20px] items-center border-black border">
        <LeftSidebar/>
        
        <div className="flex flex-col items-start  gap-[10px] h-screen w-full relative top-[100px]">
            <div className="w-[500px] rounded-lg border-dashed h-[300px] border-neutral-500 border ">
                <div className="h-full w-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
                </div>

            </div>
            <div className="flex w-[500px] justify-center">
            <Button variant="outline" size="lg" onClick={async () => { const result = await axios.post('http://localhost:3001/files/upload');
                if(result.status === 200){
                    console.log("file uploaded")
                }
                else{
                    console.log('error while fetching api')
                }
             }}>Upload</Button>


            </div>
           
        </div>
        <div className="flex flex-col h-[400px] w-[300px] border border-neutral-500 rounded-xl mr-[100px]">
            
        </div>
        
        </div>
    )
}