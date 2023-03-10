import { useEffect, useState } from "react"
import { generateDatesFromYearBeginning } from "../utils/GenerateDatesFromYearBeginning"
import { HabitDay } from "./HabitDay"
import { api } from '../lib/axios'
import dayjs from "dayjs"


const weekDays = [
    'D',
    'S',
    'T',
    'Q',
    'Q',
    'S',
    'S'
]

const summaryDates = generateDatesFromYearBeginning()

const minimumSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

type Summary = {
    id: string,
    date: string,
    amount: number,
    completed: number,
}[]

export function SummaryTable() {
    const [summary, setSummary] = useState<Summary>([])

    useEffect(() => {
        api.get('summary').then(response => {
            setSummary(response.data)
        })
    }, [])

    return(
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {weekDays.map((weekDay, i) => {
                    return(
                        <div 
                            className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
                            key={`${weekDay}-${i}`}
                        >
                            {weekDay}
                        </div>
                    )
                })}
            </div>
            
            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {summary.length > 0 && summaryDates.map(date => {
                    const dayInSummary = summary.find(day => {
                        return dayjs(date).isSame(day.date, 'day')
                    })

                    return(
                        <HabitDay 
                            key={date.toString()}
                            date={date}
                            amount={dayInSummary?.amount} 
                            defaultCompleted={dayInSummary?.completed} 
                        />
                    ) 
                })}
                {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_, i) => {
                    return (
                        <div key={i} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"></div>
                    )
                })}
            </div>   
        </div>
    )
}

{/* 
Para n??o fazer v??rias DIVs pra cada dia, n??s criamos uma (CONST weekDays array) com as letras de cada dia e percorremos esse array com um map, assim n??s fazemos apenas uma DIV e implatamos nossa CONST como valor da DIV, assim o map ir?? percorrer o array e trazer os valores autom??ticos.

<div className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
    D
</div>
<div className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
    S
</div>
<div className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
    T
</div>
<div className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
    Q
</div>
<div className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
    Q
</div>
<div className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
    S
</div>
<div className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
    S
</div> */}