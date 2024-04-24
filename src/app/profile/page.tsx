'use client'
import { logout } from "@/actions/session/session_actions"
import { useEffect } from "react"

function ProfilePage(){
    useEffect(() => {
        console.log(localStorage.getItem('data'))
      }, [])
    return (
        <div>
            <p>profile</p>   
            <button onClick={async () => await logout()}>logout</button>
        </div> 
    )
}

export default ProfilePage