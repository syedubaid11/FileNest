"use client";

import { LeftSidebar } from "@/components/ui/left-sidebar";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { RedirectToSignIn, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import "../../../app/globals.css";
import { MobileNavbar } from "@/components/ui/mobilenavbar";
import { useState } from "react";
import { Upload } from "@/components/upload";
import { Friends } from "@/components/friends";

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState<"upload" | "friends">("upload");
    const { user } = useUser();

    if (!user) return null;

    async function handleUpload(file: File) {
        try {
            const response = await axios.get("http://localhost:3001/upload/presigned-url", {
                params: { filename: file.name, fileType: file.type }
            });

            const presignedUrl = response.data;
            console.log("Presigned URL:", presignedUrl);
        } catch (error) {
            console.error("Upload error:", error);
        }
    }

    return (
        <>
            <SignedIn>
                <MobileNavbar />

                <div className="md:grid md:grid-cols-[auto_1fr] md:gap-5 flex flex-col items-center">
                    {/* Left Sidebar */}
                    <div className="hidden md:block md:h-screen">
                        <LeftSidebar imageUrl={user.imageUrl} />
                    </div>

                    {/* Right Content Area */}
                    <div className="flex flex-col gap-5 w-full">
                        <div className="flex flex-col w-full md:flex-row md:items-start gap-4">
                            {/* Upload Section */}
                            <div className="flex flex-col w-full max-w-2xl justify-center p-4 rounded-lg">
                                <div className="bg-gray-100 p-4 rounded-xl">
                                    <h2 className="md:hidden text-3xl font-semibold">
                                        Upload Your <span className="px-3 py-2 text-white font-bold bg-brush text-3xl">File</span>
                                    </h2>
                                    <p className="text-gray-600">Max size 10MB</p>
                                </div>

                                <div className="flex flex-row items-center justify-center mt-4 gap-3 bg-gray-100 p-2 rounded-md">
                                    <Button variant="outline" size="lg" onClick={() => setActiveTab("upload")}>
                                        Upload
                                    </Button>
                                    <Button variant="outline" size="lg" onClick={() => setActiveTab("friends")}>
                                        Friends
                                    </Button>
                                </div>

                                <div className="mt-4">
                                    {activeTab === "upload" && <Upload />}
                                    {activeTab === "friends" && <Friends />}
                                </div>
                            </div>

                            {/* Friends Section (Hidden on Mobile) */}
                            <div className="hidden md:flex flex-row gap-4 mt-8">
                                <div className="w-60 md:w-96 h-72 border border-gray-500 rounded-lg shadow-lg">
                                    <div className="p-3 border-b font-semibold">Friends</div>
                                    <div className="p-3"></div>
                                </div>
                                <div className="w-60 md:w-96 h-72 border border-gray-500 rounded-lg shadow-lg">
                                    <div className="p-3 border-b font-semibold">Add Friend</div>
                                    <div className="p-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
}
