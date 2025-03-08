"use client"

import { LeftSidebar } from "@/components/ui/left-sidebar";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import "../../../app/globals.css";


//returns react node/children components 
interface DashboardProps{
    children:React.ReactNode,
}

export default function Dashboard(){
    const {user}=useUser();

    if(!user){
        return null;
    }

    return(
        <>
        <SignedIn>
        <div className="md:grid md:grid-cols-[auto_1fr] md:gap-5 flex flex-col items-center ">
            {/* left sidebar */}
            <div className="h-screen hidden">
               <LeftSidebar imageUrl={`${user.imageUrl}`}/>
            </div>
            
            {/* Right content area */}
            <div className="flex flex-col gap-5">
                {/* cards - top section hidden for mobile*/}
                <div className="hidden grid grid-cols-3 gap-4 mt-[12px]">
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
                <div className="flex flex-col w-full md:flex-row md:items-start gap-4 mt-4">

                        <div className="flex flex-col gap-[10px] w-full ">
                            {/* the upload area hidden for mobile */}
                            <div className="hidden w-[800px] rounded-lg border-dashed h-[300px] border-neutral-500 border">
                                    <div className="h-full w-full flex flex-col gap-[8px] items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                        </svg>
                                        <div className="text-gray-600">Drag and Drop , or click here to select file</div>
                                    </div>
                            </div>

                            {/* upload button  */}
                            <div className="flex flex-col w-full max-w-2xl justify-center mt-[200px]">

                                    <span className="md:hidden text-[40px]">Upload Your <span className="px-3 py-2 text-yellow-400 font-bold bg-brush text-[35px]">File</span></span>
                                    <span className="text-gray-600">Max size 10mb</span>

                                    <Button className="mt-[10px]" variant="outline" size="lg" onClick={async () => { 
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

                        {/* friends section */}
                        <div className="w-[200px] md:w-[480px] h-[300px] border border border-grey-500 md:mr-[50px] rounded-lg shadow-lg">
                            <div className="p-[10px] border-b">
                                Friends 
                            </div>
                            <div className="p-[5px]">
                                

                            </div>



                        </div>

                </div>



            </div>
        </div>
        </SignedIn>
        <SignedOut>
            <RedirectToSignIn/>
        </SignedOut>
        </>

    )
}