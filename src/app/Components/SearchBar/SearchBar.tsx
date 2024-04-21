'use client'

type SearchBarPropsType = {
    searchVal:string,
    setSearchVal:(val:string) => void,
    searchType:string,
    setSearchType:(type:string) => void,
    search:(ttk:number) => void
}

export const SearchBar = ({searchVal, setSearchVal, searchType, setSearchType, search}:SearchBarPropsType) => {
    return(
        <div className='flex w-[calc(100%-80px)] max-w-3xl h-[calc(40px+16px)] bg-[rgb(43,43,43)] text-white mx-auto py-2 focus-within:ring-1 focus-within:ring-white'>
            <input className='w-[calc(100%-116px)] border-t-0 border-r border-[rgb(87 93 95)] bg-inherit text-inherit indent-2
            focus-visible:outline-none'
                placeholder="Search Artists..."
                value={searchVal}
                onChange={(e) => {setSearchVal(e.target.value)}}
                onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                        search(10)
                    }
                }}
            />
            <select className='text-black w-32 text-center bg-inherit text-inherit focus-visible:outline-none' value={searchType} onChange={(e) => {setSearchType(e.target.value)}}>
                <option value='artist'>Artist</option>
                <option value='album'>Album</option>
                <option value='song'>Song</option>
            </select>
        </div>
    )
}