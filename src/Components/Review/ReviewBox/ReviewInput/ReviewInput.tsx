'use client'

import InputBar from "@/Components/InputBar/InputBar"
import { KeyboardEvent, useEffect, useState } from "react"

export default function ReviewInput(){
    const [reviewScore, setReviewScore] = useState<string>('')
    const [reviewText, setReviewText] = useState<string>('')

    const setNewScore = (newVal:string) => {
        let intVal = Number.parseInt(newVal)
        if(newVal.length === 0 || (intVal && intVal <= 100)){
            setReviewScore(newVal)
        }
    } 
    const updateReviewText = (newVal:string) => {
        if(newVal.length <= 500){
            setReviewText(newVal)
        }
    }
    return (
        <div className='bg-[rgb(43,43,43)] w-full max-w-[925px] flex flex-col p-5 gap-4'>
            <h1 className=' text-2xl font-bold'>Review This Album</h1>
            <div className=''>
                <p className='mb-2'>Score</p>
                <div className='align-middle'>
                    <input className='bg-[rgb(60,60,60)] text-sm w-14 text-center h-8' 
                        maxLength={3}
                        placeholder="0-100"
                        value={reviewScore}
                        onChange={(e) => {setNewScore(e.target.value)}}
                    />
                </div>
            </div>
            <div>
                <div className='flex mb-2 align-text-bottom'>
                    <p className=''>Review</p>
                    <p className='ml-1 align-text-bottom font-extralight text-[rgb(175,175,175)]'>(optional)</p>
                </div>
                <div className='relative'>
                    <textarea className='bg-[rgb(60,60,60)] text-sm w-full h-32 p-2 ' 
                        placeholder="Review..."
                        value={reviewText}
                        onChange={(e) => {updateReviewText(e.target.value)}}
                    />
                </div>
                <p className='text-right'>{`${reviewText.length}/500`}</p>
            </div>
            <div>
                <button className=''>Submit</button>
            </div>
        </div>
    )
}