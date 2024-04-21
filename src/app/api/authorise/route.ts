import {SpotifyApi} from '@spotify/web-api-ts-sdk'
import { API } from '../SpotifyAPI'
export async function GET(){
    if(!API[0]){
        const spotifyAPI= SpotifyApi.withClientCredentials(
            `${process.env.CLIENT_ID}`,
            `${process.env.CLIENT_SECRET}`
        )
        API.push(spotifyAPI)
    }
    console.log(API[0])
    
    return Response.json({})
}