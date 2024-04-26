'use client'

import { KeyboardEvent } from "react"

type InputBarProps = {
    placeholder?:string,
    value:string,
    setValue:(s:string) => void ,
    onKeyDown?:(e:KeyboardEvent<HTMLInputElement>) => void,
    className?:string
}

export default function InputBar({placeholder, value, setValue, onKeyDown, className}:InputBarProps){
    return (
        <input className={`w-[calc(100%-116px)] border-t-0 border-r border-[rgb(87 93 95)] bg-inherit text-inherit indent-2
        focus-visible:outline-none ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => {setValue(e.target.value)}}
            onKeyDown={(e) => {onKeyDown? onKeyDown(e): {}}}
        />
    )
}