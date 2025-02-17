"use client"

import { LeftSidebar } from "@/app/components/left-sidebar"
import { Button } from "@/app/components/ui/button"

//returns react node/children components 
interface DashboardProps{
    children:React.ReactNode,
}

export default function Dashboard(){
    return(
        <div className="flex gap-[20px]">
        <LeftSidebar/>
        <div className="flex flex-col items-start  gap-[10px] h-screen w-full relative top-[100px]">
            <div className="w-[500px] rounded-lg border-dotted h-[300px] border-black border ">
                <div className="h-full w-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
                </div>

            </div>
            <div className="flex w-[500px] justify-center">
            <Button variant="outline" size="lg">Upload</Button>


            </div>

        </div>
        
        </div>
    )
}