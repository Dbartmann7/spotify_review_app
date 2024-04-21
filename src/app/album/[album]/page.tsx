'use client'

import { useSearchParams } from "next/navigation"

export default function AlbumPage({params}: { params: { album: string } }){
    const searchParams = useSearchParams()
    const albumDataString = searchParams.get('data')
    let albumData
    if(albumDataString){
        albumData = JSON.parse(albumDataString)
        console.log(albumData)
    }
   
  
    return(
        <>
            {params.album}
        </>
    )
}