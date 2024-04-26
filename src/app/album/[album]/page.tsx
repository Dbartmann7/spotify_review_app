'use client'

import AlbumTitles from "@/Components/Review/AlbumTitles/AlbumTitles"
import ReviewBox from "@/Components/Review/ReviewBox/ReviewBox"
import TotalScoreDisplay from "@/Components/Review/TotalScoreDisplay/TotalScoreDisplay"
import { Album } from "@spotify/web-api-ts-sdk"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function AlbumPage({params}: { params: { album: string } }){
    const [albumData, setAlbumData] = useState<Album | undefined>()
    const [score, setScore] = useState<number>(90)
    const searchParams = useSearchParams()

    useEffect(() => {
        const albumDataString = searchParams.get('data')
        setAlbumData(JSON.parse(albumDataString!))
    }, [])
   
  
    return(
        <>
           {albumData ?
                <>
                    <div className='mx-auto w-max flex gap-10 max-[925px]:flex-col place-content-center'>
                        <div className='w-max max-w-[470px] flex flex-col place-content-between min-h-[24rem] bg-[rgb(43,43,43)] p-4'>
                            <AlbumTitles albumName={albumData.name} artists={albumData.artists}/>
                            <TotalScoreDisplay score={score}/>
                            <a href={albumData.external_urls.spotify} className='place-content-end flex'>View album on Spotify</a>
                        </div>
                        <img src={albumData.images[0].url} className='aspect-square w-96'/>
                    </div>
                    <ReviewBox/>
                </>
            :
                <p>couldnt get album data</p>
        }
        </>
    )
}