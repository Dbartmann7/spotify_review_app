import { SearchResultType } from "@/app/types/SearchResultType"
import { API } from "../SpotifyAPI"

import { Page, SimplifiedAlbum } from "@spotify/web-api-ts-sdk"
export async function POST(req:Request){
    if(!API[0]) return Response.json({status:500, message:'No Spotify API found'})
    const reqData = await req.json()
    const items = await API[0].search(reqData.searchVal, ['album'], undefined, 2)

    return Response.json({status:200, type:'album', albums:items.albums})
    
}