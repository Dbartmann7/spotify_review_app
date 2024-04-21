'use client'

import { useSearchParams } from "next/navigation"

export default function AlbumPage({params}: { params: { song: string } }){
    const searchParams = useSearchParams()
    const songDataString = searchParams.get('data')
    let songData
    if(songDataString){
        songData = JSON.parse(songDataString)
        console.log(songData)
    }
   
  
    return(
        <>
            {params.song}
        </>
    )
}