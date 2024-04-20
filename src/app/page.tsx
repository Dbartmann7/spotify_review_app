'use client'
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "./contexts/TokenContext";
export default function Home() {
  const [authCode, setAuthCode] = useState<any>()
  const [tokenData, setTokenData] = useState()

  useEffect(() => {
    console.log(authCode)
  }, [authCode])
  useEffect(() => {
    console.log(window.location.search.length)
    if(window.location.search.length === 0){
      authorize()
    }else{
      let temp = window.location.search
      if(temp.length > 0){
        let params = new URLSearchParams(temp)
        console.log(params.get('code'))
        setAuthCode(params.get('code'))
      }
    }
   
    
  }, [])

  useEffect(() => {
    if(authCode){
      getProperTokenData()
    }
    async function getProperTokenData(){
      const res = await fetch('http://localhost:3000/api/token',{
        method:'post',
        body:JSON.stringify({code:authCode})
      })
      setTokenData(await res.json())
    }
  }, [authCode])
  useEffect(() => {
    console.log(tokenData)
  }, [tokenData])

  function authorize(){
    const AUTHORIZE = 'https://accounts.spotify.com/authorize'
    let url = AUTHORIZE;
    url += "?client_id=" +'259739017edb450fbaa0189553b0a98a';
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI('http://localhost:3000/');
    url += "&show_dialog=true";
    url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
    window.location.href = url; // Show Spotify's authorization screen
  }

  async function getArtistData(){
    const res = await fetch('http://localhost:3000/api/artist', {
      method:'post',
      body:JSON.stringify({token:tokenData})
    })
    let data = await res.json()
    console.log(data)
  }
  return (
    <>
      <button onClick={getArtistData}>Get Artist Data</button>
    </>
  );
}
