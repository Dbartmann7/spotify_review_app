'use client'
import { login } from "@/actions/session/session_actions"
import { LogInContext } from "@/app/contexts/LogInContext"
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

export default LoginPage