'use client'

import { Artist } from "@spotify/web-api-ts-sdk"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ArtistPage({}){
    const [artistData, setArtistData] = useState<Artist | undefined>()
    const searchParams = useSearchParams()
    useEffect(() => {
        const artistDataString = searchParams.get('data')
        setArtistData(JSON.parse(artistDataString!))
    }, [])
    
   
    return(
        <>
        {artistData ?
            <img src={artistData!.images[0].url} width={500} height={500}/>
        :
            <p>couldnt get artist data</p>
        }
            
        </>
    )
}