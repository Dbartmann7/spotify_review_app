'use client'

import { AlbumResultItem } from "./ResultItems/AlbumResultItem"
import { ArtistResultItem } from "./ResultItems/ArtistResultItem"
import { Album, Artist, Page } from "@spotify/web-api-ts-sdk"

type SearchResultListProps = {
    artistList?:Page<Artist>,
    albumList?:Page<Album>,
    handleResultClick:(data:Artist | Album) => void
}

export const SearchResultList = ({artistList, albumList, handleResultClick}:SearchResultListProps) => {
   

    return (
        <ul className='w-[calc(100%-1rem)] max-w-3xl mx-auto pr-0 overflow-y-scroll scroll-p-0 min-h-96 max-h-96 mt-6 *
        scrollbar-gutter-stable border-2 border-blue-500 flex flex-col gap-1 bg-[rgb(43,43,43)]'>
            {artistList?.items?.map((item) => {
                return <ArtistResultItem item={item} handleResultClick={handleResultClick}/>
            })}
            {albumList?.items.map((item) => {
                return <AlbumResultItem item={item} handleResultClick={handleResultClick}/>
            })}
        </ul>
    )
}