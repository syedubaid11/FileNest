"use client"

import { LeftSidebar } from "@/components/ui/left-sidebar";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import "../../../app/globals.css";
import { MobileNavbar } from "@/components/ui/mobilenavbar";
import { useState } from "react";
import { Upload } from "@/components/upload";
import { Friends } from "@/components/friends";

//returns react node/children components 
interface DashboardProps{
    children:React.ReactNode,
}




export default function Dashboard(){
    const [upload,setUpload]=useState<boolean>(true);
    const [friends,setFriend]=useState<boolean>(false);
   

    const {user}=useUser();

    if(!user){
        return null;
    }

    return(
        <>
        <SignedIn>
       {/* navbar for mobile */}
       <MobileNavbar/>
       
        <div className="md:grid md:grid-cols-[auto_1fr] md:gap-5 flex flex-col items-center ">
            
            {/* left sidebar */}
            <div className="md:h-screen hidden">
               <LeftSidebar imageUrl={`${user.imageUrl}`}/>
            </div>
            
            {/* Right content area */}
            <div className="flex flex-col gap-5">
                {/* upload - bottom section */}
                <div className="flex flex-col w-full md:flex-row md:items-start gap-4 mb-auto">

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
                            <div className="flex flex-col w-full max-w-2xl justify-center mt-[200px] rounded-lg p-[10px]">

                                   <div className="bg-gray-100 p-[10px] rounded-xl">

                                        <span className="md:hidden text-[35px]">Upload Your <span className="px-3 py-2 text-white font-bold bg-brush text-[35px]">File</span></span>
                                        <div className="text-gray-600 ">Max size 10mb</div>
                                    </div>

                                     
                                    <div className={`flex flex-row items-center justify-center mt-[10px] gap-[10px] bg-gray-100 p-[5px] z-10 rounded-md`}>
                                        <Button className="" variant="outline" size="lg" onClick={async () => { 
                                            setUpload(true);
                                            setFriend(false)
                                            const result = await axios.post('http://localhost:3001/files/upload');
                                            if(result.status === 200){
                                                console.log("file uploaded")
                                            }
                                            else{
                                                console.log('error while fetching api')
                                            }
                                        }}>Upload</Button>
                                        <Button className="" variant="outline" size="lg" onClick={()=>{setUpload(false),setFriend(true)}}>
                                            Friends
                                        </Button>
                                    </div>


                                    <div className={`${upload?"":"hidden"}`}>
                                        <Upload/>
                                    </div>
                                    <div className={`${friends?"":'hidden'}`}>

                                        <Friends/>

                                    </div>

                            </div>
                        </div>

                        {/* friends section  hidden mobile for now*/}
                        <div className="hidden md:flex flex-row gap-[10px] mt-[50px]">
                            <div className="w-[200px] md:w-[480px] h-[300px] border border-grey-500 md:mr-[50px] rounded-lg shadow-lg">
                                <div className="p-[10px] border-b">
                                    Friends 
                                </div>
                                <div className="p-[5px]">
                                </div>
                            </div>

                            <div className="w-[150px] md:w-[480px] h-[300px] border border-grey-500 md:mr-[50px] rounded-lg shadow-lg">
                                <div className="p-[10px] border-b">
                                    Add friend
                                </div>
                                <div className="p-[5px]">
                                </div>
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