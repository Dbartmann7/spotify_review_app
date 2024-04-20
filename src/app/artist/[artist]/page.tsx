'use client'

import { useSearchParams } from "next/navigation"

export default function ArtistPage({params}: { params: { artist: string } }){
   const searchParams = useSearchParams()
    const exurl = searchParams.get('exurl')
    const genres = searchParams.get('genres')
    let bigImg = searchParams.get('bigImg')
    
    if(bigImg){
        bigImg = JSON.parse(bigImg)
        console.log(bigImg)

    }
  
    return(
        <>
            {params.artist}
        </>
    )
}