'use client'

import { Artist } from "@spotify/web-api-ts-sdk"

type AlbumTitlesProps = {
    albumName:string,
    artists:Artist[]
}

export default function AlbumTitles({albumName, artists}:AlbumTitlesProps){

    return(
        <div className='flex flex-col place-items-center gap-2'>

            {albumName.length < 72 ? <h1 className='text-2xl'>{albumName}</h1>: <h1 className='text-2xl'>{`${albumName.substring(0, 72)}...`}</h1>}
            <h2 className='text-xl'>{artists.map((artist => {
                    return artist.name
                }))}
            </h2>
        </div>
    )
}