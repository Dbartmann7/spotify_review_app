'use client'
import { useContext, useEffect, useState } from "react"
import Link from "next/link"
import { getSessionClient } from "@/actions/session/session_actions"
import { SessionDataType } from "@/types/session/SessionTypes"
import { usePathname, useRouter } from "next/navigation"

export const SiteHeader = () => {
    const [session, setSession] = useState<SessionDataType | undefined>()
    const pathname = usePathname()
    useEffect(() => {
        async function fetchSession(){
            setSession(JSON.parse(await getSessionClient()))
        }
        fetchSession()
    }, [pathname])
   
    return (
        <header className='w-[calc(100%-2rem)] h-20 mx-4 border-b border-b-gray-100 relative '>
            <div className="flex absolute right-4  w-fit h-[calc(100%-1rem)] inset-y-1/2 -translate-y-1/2">
                {!session?.isLoggedIn ? 
                    <>
                        <Link href={'/profile/signup'} className=''>
                            <div className='h-full w-20 flex place-items-center place-content-center hover:cursor-pointer hover:text-cyan-400'>
                                <p>signup</p>
                            </div>
                        </Link> 
                        <Link href={'/profile/login'} className=''>
                            <div className='h-full w-20 flex place-items-center place-content-center hover:cursor-pointer hover:text-cyan-400'>
                                <p>login</p>
                            </div>
                        </Link> 
                    </>
                :
                    <Link href={'/profile'} className=''>
                        <div className='h-full w-20 flex place-items-center place-content-center hover:cursor-pointer hover:text-cyan-400'>
                            <p>profile</p>
                        </div>
                    </Link>
                }
                
            </div>
        </header>
    )
}