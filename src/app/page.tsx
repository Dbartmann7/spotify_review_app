'use client'
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "./contexts/TokenContext";
import { useRouter } from "next/navigation";
export default function Home() {
  const [artistToSearch, setArtistToSearch] = useState<string>('')
  const [artistList, setArtistList] = useState<{items:any[]}>({items:[]})
  const router = useRouter()
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
      body:JSON.stringify({artist:artistToSearch})
    })
    let data = await res.json()
    console.log(data)
    setArtistList(data.artists)
  }
  useEffect(() => {
    console.log(artistList)
  }, [artistList])
  function handleArtistClick(name:string){
    let searchParams = new URLSearchParams()
    searchParams.set('name', name)
    router.push(`/artist/${name}?${searchParams}`)
  }
  return (
    <>
      <input
        style={{color:'black', textIndent:'5px'}}
        placeholder="Search Artists..."
        value={artistToSearch}
        onChange={(e) => {setArtistToSearch(e.target.value)}}
      />
      <button onClick={getArtistData}>Get Artist Data</button>
      <br/>
      <ul>
        {
          artistList.items.map(artist =>{
            return <p onClick={() => {handleArtistClick(artist.name)}}>{artist.name}</p>
          })
        }
      </ul>
    </>
  );
}
