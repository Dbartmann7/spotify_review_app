import { Album, Artist, Page, SimplifiedAlbum, SimplifiedArtist } from "@spotify/web-api-ts-sdk"

export type SearchResultType = {
    type:string,
    artist?:Page<Artist>,
    album?:Page<Album>
}