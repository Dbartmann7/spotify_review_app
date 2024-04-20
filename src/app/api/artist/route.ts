
export async function POST(req:Request){
    const tokenData = await req.json()
    console.log(tokenData)
    if(!tokenData.token.access_token){
        return Response.json({
            status:400,
            message:'no token'
        })
    }
    const res = await fetch('https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb', {
        method:'get',
        headers:{
            'Authorization': `Bearer  ${tokenData.token.access_token}`
        }
    })

    return Response.json(await res.json())
}