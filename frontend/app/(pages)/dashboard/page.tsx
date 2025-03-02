"use client"

import { LeftSidebar } from "@/components/ui/left-sidebar"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

//returns react node/children components 
interface DashboardProps{
    children:React.ReactNode,
}

export default function Dashboard(){
    return(
        <div className="grid grid-cols-[auto_1fr] gap-5">
            {/* left sidebar */}
            <div className="h-screen">
               <LeftSidebar/>
            </div>
            
            {/* Right content area */}
            <div className="flex flex-col gap-5">
                {/* cards - top section */}
                <div className="grid grid-cols-3 gap-4 mt-[12px]">
                    <Card className="h-[150px]">
                        <CardHeader>
                            <CardTitle>Secure Transfers</CardTitle>
                        </CardHeader>
                    </Card>
                    <Card className="h-[150px]">
                        <CardHeader>
                            <CardTitle>Secure Transfers</CardTitle>
                        </CardHeader>
                    </Card>
                    <Card className="h-[150px]">
                        <CardHeader>
                            <CardTitle>Secure Transfers</CardTitle>
                        </CardHeader>
                    </Card> 
                </div>
                
                {/* upload - bottom section */}
                <div className="flex flex-row items-start gap-4 mt-4">
                    <div className="flex flex-col w-full">
                        <div className="w-full max-w-2xl rounded-lg border-dashed h-[300px] border-neutral-500 border">
                                <div className="h-full w-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                    </svg>
                                </div>
                        </div>
                        <div className="flex w-full max-w-2xl justify-center">
                                <Button variant="outline" size="lg" onClick={async () => { 
                                    const result = await axios.post('http://localhost:3001/files/upload');
                                    if(result.status === 200){
                                        console.log("file uploaded")
                                    }
                                    else{
                                        console.log('error while fetching api')
                                    }
                                }}>Upload</Button>
                        </div>
                    </div>

                    <div className="w-[400px] h-[300px] border border border-neutral-500 mr-[50px] rounded-lg">

                    </div>

                </div>



            </div>
        </div>
    )
}