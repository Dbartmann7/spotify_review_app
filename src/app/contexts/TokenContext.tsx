'use client'

import { ReactNode, createContext, useEffect, useState } from "react"

type TokenContextPropsType = {
    children:ReactNode
}
type TokenContextValueType = {
    tokenData:any,
    setTokenData:(data:any) => void
}
export const TokenContext = createContext<TokenContextValueType>({tokenData:null, setTokenData:(data) => {}})

export const TokenContextProvider = ({children}:TokenContextPropsType) => {
   const [tokenData, setTokenData] = useState()

   useEffect(() => {
    console.log(tokenData)
   }, [tokenData])
    const value:TokenContextValueType = {
        tokenData:tokenData,
        setTokenData:setTokenData
    }
    

    return (
        <TokenContext.Provider value={value}>
            {children}
        </TokenContext.Provider>
    )
}
