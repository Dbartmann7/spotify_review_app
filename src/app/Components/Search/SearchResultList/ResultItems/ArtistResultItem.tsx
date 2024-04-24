'use client'

import { Artist} from "@spotify/web-api-ts-sdk"


type ArtistResultItemProps = {
    item:Artist,
    handleResultClick:(data:any) => void
}

export const ArtistResultItem = ({item, handleResultClick}:ArtistResultItemProps) => {
   

    return (
        <div className='w-full min-h-32 flex justify-between p-2'>
            <div className='w-28 h-28'>
                <img className='w-full h-full object-fill'
                    src={item?.images[0]?.url}
                />
            </div>
            <div className='flex flex-col hover:cursor-pointer' onClick={() => {handleResultClick(item)}}>
                <p>{item?.name.length > 60 ?
                    `${item.name.substring(0,60)}...`
                    :
                    item.name
                }</p>
            </div>
        </div>
    )
}