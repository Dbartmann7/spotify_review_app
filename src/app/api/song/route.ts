import { API } from "../SpotifyAPI"
export async function POST(req:Request){
    if(!API[0]) return Response.json({status:500, message:'No Spotify API found'})
    const reqData = await req.json()
    const items = await API[0].search(reqData.searchVal, ['track'])
    return Response.json(items.tracks)
}