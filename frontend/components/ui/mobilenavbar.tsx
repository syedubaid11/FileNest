import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs";

export const MobileNavbar=()=>{
    const {user}:(any)=useUser();

    return(
        <>
        <SignedIn>
        <div className="flex flex-row items-center justify-center">

        <div className=" rounded-xl w-3/4 h-[60px] bg-white/10 backdrop-blur-lg border-white/20 shadow-md flex flex-row items-center p-[10px] justify-between">
            
            <div>

            </div>
            <div>

            </div>
            <div className="w-[30px] h-[30px]">
                <img className="rounded-xl"src={user.imageUrl}></img>
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