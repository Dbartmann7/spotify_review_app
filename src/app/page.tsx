'use client'
import {useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchBar } from "./Components/Search/SearchBar/SearchBar";
import { SearchResultType } from "./types/SearchResultType";
import { SearchResultList } from "./Components/Search/SearchResultList/SearchResultList";

export default function Home() {
  const [searchVal, setSearchVal] = useState<string>('')
  const [searchType, setSearchType] = useState<string>('artist')
  const [searchResultList, setSearchResultList] = useState<SearchResultType>({type:''})

  const router = useRouter()
  useEffect(() => {
    authorise()
  }, [])
  
  async function authorise(){
    const res = await fetch('http://localhost:3000/api/authorise')
    console.log(await res.json()) 
  }
  async function search(ttk:number){
    const res = await fetch(`http://localhost:3000/api/${searchType}`, {
      method:'post',
      body:JSON.stringify({searchVal:searchVal})
    })
    let data = await res.json()
    console.log(data)
    if(data.status === 200) {
      setSearchResultList(() => {
        const result:SearchResultType = {type:''}
        result.type = data.type
        if(result.type === 'artist') result.artist = data.artists
        if(result.type === 'album') result.album = data.albums    
        return result
      })
    }else{
      authorise()
      if(ttk > 0){
        search(ttk-1)
      }else{
        throw new Error('error getting data')
      }
      
    }
  }
  useEffect(() => {
    console.log(searchResultList)
  }, [searchResultList])
  useEffect(() => {
    if(searchVal.length > 0) search(10)
  }, [searchType])
  
  function handleResultClick(data:any){
    let searchParams = new URLSearchParams()
   
    searchParams.set('data', JSON.stringify(data))
    router.push(`/${searchType}/${data.name}?${searchParams}`)
  }
  
  return (
    <>
      <SearchBar 
        searchVal={searchVal} 
        setSearchVal={setSearchVal} 
        searchType={searchType} 
        setSearchType={setSearchType}
        search={search}
      />
      
      <SearchResultList
        artistList={searchResultList.artist}
        albumList={searchResultList.album}
        handleResultClick={handleResultClick}
      />
      {/* <ul className='mx-auto w-max'>
        {
          searchResultList.items.map(result =>{
            if(result.album_type){
              if(result.album_type !== 'album'){
                return
              }
            }
            return <p onClick={() => {handleResultClick(result)}}>{result.name}</p>
          })
        }
      </ul> */}
    </>
  );
}
