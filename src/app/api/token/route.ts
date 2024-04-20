import { tokenData } from "./token"
export async function GET(){
    return Response.json(tokenData)
}
export async function POST(req:Request){
    let reqData = await req.json()
    const bodyParams = new URLSearchParams()
    bodyParams.set('redirect_uri',encodeURI('http://localhost:3000/') )
    bodyParams.set('code', reqData.code)
    bodyParams.set('grant_type', 'authorization_code')
    console.log(bodyParams.toString())
    const res = await fetch('https://accounts.spotify.com/api/token', {
        // method:'POST',
        // headers:{
        //     'Content-Type':'application/x-www-form-urlencoded',
        // },
        // body:`grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
        method:'post',
        headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization':'Basic ' + (Buffer.from('259739017edb450fbaa0189553b0a98a:fe640d23e84540e3973e1df2c4eab69a').toString('base64'))
      },
      body:bodyParams
    })
    let data = await res.json()
    tokenData.pop()
    tokenData.push(data)
    console.log(data)
    return Response.json(data)
}