import { useEffect, useState } from "react"
import axios from "axios"

export const Friends=()=>{
    const[friend,setFriend]=useState([])

    useEffect(()=>{
        const list=axios.get('http://localhost:3001')


    },[])

    const map=friend.map((item)=>{
        return (
            <div>
                {item}
            </div>
        )
    })

    return(
        <>
        {map}
        </>
    )

    
}