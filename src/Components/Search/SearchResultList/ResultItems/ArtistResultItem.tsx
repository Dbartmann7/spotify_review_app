'use client'

import { Artist} from "@spotify/web-api-ts-sdk"

import Link from "next/link"



type ArtistResultItemProps = {
    item:Artist,
    handleResultClick:(data:any) => void
}

export const ArtistResultItem = ({item, handleResultClick}:ArtistResultItemProps) => {
    function setSearchParams(data:string){
        const searchParams = new URLSearchParams()
        searchParams.set('data', data)
        return searchParams
    }

    return (
        <div className='w-full min-h-32 flex justify-between p-2'>
            <div className='w-28 h-28'>
                <img className='w-full h-full object-fill'
                    src={item.images[0]?.url}
                />
            </div>
            <Link href={`/artist/${item.name}?${setSearchParams(JSON.stringify(item))}`} className='flex flex-col hover:cursor-pointer'>
                <p>{item?.name.length > 60 ?
                        `${item.name.substring(0,60)}...`
                    :
                        item.name
                }</p>
            </Link>
            {/* <div className='flex flex-col hover:cursor-pointer' onClick={() => {handleResultClick(item)}}>
                <p>{item?.name.length > 60 ?
                    `${item.name.substring(0,60)}...`
                    :
                    item.name
                }</p>
            </div> */}
        </div>
    )
}