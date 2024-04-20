'use client'
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "./contexts/TokenContext";
export default function Home() {
  
  useEffect(() => {
    async function authorise(){
      const res = await fetch('http://localhost:3000/api/authorise')
      console.log(await res.json()) 
    }
    authorise()
  }, [])

  async function getArtistData(){
    const res = await fetch('http://localhost:3000/api/artist', {
      method:'post',
      body:JSON.stringify({artist:'The Beatles'})
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
