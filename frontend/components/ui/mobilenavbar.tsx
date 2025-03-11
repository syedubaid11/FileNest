import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs";

export const MobileNavbar=()=>{
    const {user}:(any)=useUser();

    return(
        <>
        <SignedIn>
        <div className="flex flex-row items-center justify-center rounded-xl">

        <div className="w-3/4 h-[60px] bg-white/10 backdrop-blur-lg border-white/20 shadow-md">
            <div className="w-[10px] h-[10px]">
                <img src={user.imageUrl}></img>
            </div>
            <div>

            </div>
            <div>

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