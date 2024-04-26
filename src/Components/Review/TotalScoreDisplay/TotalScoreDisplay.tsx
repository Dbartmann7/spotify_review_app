'use client'

import { useEffect, useState } from "react"

type TotalScoreDisplayProps = {
    score:number
}

export default function TotalScoreDisplay({score}:TotalScoreDisplayProps){
    const [scoreColor, setScoreColor] = useState<string>()

    useEffect(() => {
        if(score > 70){
            setScoreColor('lime')
        }else if(score > 50){
            setScoreColor('orange')
        }else{
            setScoreColor('red')
        }
    }, [score])
    return (
        <div className={`w-40 aspect-square rounded-full relative mx-auto`} style={{background:`conic-gradient(${scoreColor} 0% ${score}%, rgb(43,43,43) ${score}% 100%)`}}>
            <div className='w-24 aspect-square bg-black rounded-full absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 flex place-content-center place-items-center'>
                <p className='text-4xl font-bold'>
                    {score}
                </p>
            </div>
        </div>
    )
}