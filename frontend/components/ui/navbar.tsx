export const Navbar=()=>{
    return(
        <div className="flex justify-between w-screen items-center p-4 text-white">
            <h1 className="text-2xl">logo</h1>
            <div className="flex items-center">
                <a href="/login" className="mr-4">Login</a>
            </div>
        </div>
    )
}