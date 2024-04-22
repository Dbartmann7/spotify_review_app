'use client'

import { Album} from "@spotify/web-api-ts-sdk"


type AlbumResultItemProps = {
    item:Album
}

export const AlbumResultItem = ({item}:AlbumResultItemProps) => {
   

    return (
        <div className='w-full min-h-32 bg-red-400'>
            <img src={item?.images[0]?.url} width='100px' height='100px'/>
        </div>
    )
}