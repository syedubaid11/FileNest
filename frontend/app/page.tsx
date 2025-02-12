import FadingDotsBackground from "./components/fading-dots-background";

export default function Home(){
  return(
    <>
    <div className="z-1">
      <FadingDotsBackground/>
    </div>
    <div className="w-screen h-screen flex items-center justify-center">
    <div className="z-20 text-white flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to FileNest</h1>
        <p className="text-xl">A blazing fast way to share files</p>
      </div>

    </div>
    
    </>
  )
}