'use client'

import { getSessionClient } from "@/actions/session/session_actions"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"

export default function SignUpPage(){
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const router = useRouter()
    useEffect(() => {
        async function checkLoggedIn(){
            const res = JSON.parse(await getSessionClient())
            if(res.isLoggedIn){
                router.replace('/')
            }
        }

        checkLoggedIn()
    }, [])
    async function handleClick(){
        const res = await fetch('http://localhost:3000/api/signup', {
            method:'post',
            body:JSON.stringify({username:username, password:password})
        })
        console.log(await res.json())
    } 
    
    return (
        <div className=' w-full max-w-64 mx-auto [&>*>input]:indent-1 flex flex-col place-items-center place-content-center gap-5 h-96'>
            <h1 className='text-4xl w-full'>Sign Up</h1>
            <div className='w-full'>
                <p>Username</p>
                <input className='w-full text-black' value={username} onChange={(e) => {setUsername(e.target.value)}}/>
            </div>
            <div className='w-full'>
                <p>Password</p>
                <input className='w-full text-black' type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}