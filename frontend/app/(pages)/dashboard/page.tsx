import { LeftSidebar } from "@/app/components/left-sidebar"


//returns react node/children components 
interface DashboardProps{
    children:React.ReactNode,
}

export default function Dashboard(){
    return(
        <>
        <LeftSidebar/>
        
        </>
    )
}