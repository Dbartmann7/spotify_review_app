'use client'

import { useSearchParams } from "next/navigation"

export default function ArtistPage({params}: { params: { artist: string } }){
   const searchParams = useSearchParams()
   const name = searchParams.get('name')
   console.log(name)
    return(
        <>
            {params.artist}
        </>
    )
}