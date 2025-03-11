import { Button } from "./ui/button"

export const Upload=()=>{
    return(
        <>
        <div className="flex flex-col items-center justify-center h-[200px] w-[350px] mt-[20px] border rounded-lg border-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" className="size-12">
               <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
            </svg>
            <div className="hidden md:block text-gray-500 mt-[8px]">Drag and Drop the file</div>
            <Button className="mt-[8px]">Browse</Button>
        </div>
        </>
    )
}