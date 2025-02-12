import FadingDotsBackground from "./components/fading-dots-background";

export default function Home(){
  return(
    <>
    <FadingDotsBackground/>
    <div className="z-10 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to FileNest</h1>
        <p className="text-xl">A blazing fast way to share files</p>
      </div>
    </>
  )
}