'use client'

type SearchBarPropsType = {
    searchVal:string,
    setSearchVal:(val:string) => void,
    searchType:string,
    setSearchType:(type:string) => void
}

export const SearchBar = ({searchVal, setSearchVal, searchType, setSearchType}:SearchBarPropsType) => {
    return(
        <div className='flex w-fit h-fit'>
            <input
                 style={{color:'black', textIndent:'5px'}}
                 placeholder="Search Artists..."
                 value={searchVal}
                 onChange={(e) => {setSearchVal(e.target.value)}}
            />
            <select className='text-black' value={searchType} onChange={(e) => {setSearchType(e.target.value)}}>
                <option value='artist'>Artist</option>
                <option value='album'>Album</option>
                <option value='song'>Song</option>
            </select>
        </div>
    )
}