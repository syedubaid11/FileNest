import { useEffect, useState } from "react"
import axios from "axios"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export const Friends=()=>{
    const[friend,setFriend]=useState(['hye','hes'])
    const[friendCode,setFriendCode]=useState("")

    useEffect(()=>{
        const list=axios.get('http://localhost:3001')


    },[])

    const map=friend.map((item)=>{
        return (
            <div className="p-[5px] border-b border-t border-gray-200">
                {item}
            </div>
        )
    })

    return(
        <div className="w-[350px] min-h-[200px] border border-gray-300 mt-[20px] rounded-lg">
        <div className="flex flex-row gap-[5px] p-[10px]">
            <Input type="email" value={friendCode} onChange={(e)=>{setFriendCode(e.target.value)}} placeholder="Enter Friend Code"/>
            <Button type="submit">Add Friend</Button>    
        </div>
        <div className="">
            {map}
        </div>
        </div>
    )

    
}