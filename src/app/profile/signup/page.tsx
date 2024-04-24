'use client'

import { LogInContext } from "@/app/contexts/LogInContext"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"

export default function LoginPage(){
    const [username, setUsername] = useState<string>('testuser')
    const [password, setPassword] = useState<string>('test')
    const {isLoggedIn} = useContext(LogInContext)
    const router = useRouter()
    async function handleClick(){
        const res = await fetch('http://localhost:3000/api/signup', {
            method:'post',
            body:JSON.stringify({username:username, password:password})
        })
        console.log(await res.json())
    } 
    useEffect(() => {
        if(isLoggedIn){
            router.replace('http://localhost:3000/')
        }
    }, [isLoggedIn])
    return (
        <div className=" w-full max-w-xl h-[500px] bg-red-400 mx-auto text-black [&>*>input]:indent-1">
            <div>
                <p>Username</p>
                <input className='' value={username} onChange={(e) => {setUsername(e.target.value)}}/>
            </div>
            <div>
                <p>Password</p>
                <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}