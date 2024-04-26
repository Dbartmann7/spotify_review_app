'use client'
import { login } from "@/actions/session/session_actions"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"


function LoginPage({}){
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const router = useRouter()
    async function handleClick(){
        const res = await login(username, password)
    } 

    return (
        <div className='w-full max-w-64 mx-auto [&>*>input]:indent-1 flex flex-col place-items-center place-content-center gap-5 h-96'>
            <h1 className='text-4xl w-full mb-4'>Login</h1>
            <div className='w-full'>
                <p>Username</p>
                <input className='w-full text-black' placeholder='test name:test' value={username} onChange={(e) => {setUsername(e.target.value)}}/>
            </div>
            <div className='w-full'>
                <p>Password</p>
                <input className='w-full text-black' placeholder="test pass:test" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            <button className='mt-5' onClick={handleClick}>Submit</button>
        </div>
    )
}

export default LoginPage