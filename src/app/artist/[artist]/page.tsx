'use client'

import { useSearchParams } from "next/navigation"

export default function ArtistPage({params}: { params: { artist: string } }){
    const searchParams = useSearchParams()
    const artistDataString = searchParams.get('data')
    let artistData
    if(artistDataString){
        artistData = JSON.parse(artistDataString)
        console.log(artistData)
    }
   
    return(
        <>
            {artistData.name}
        </>
    )
}