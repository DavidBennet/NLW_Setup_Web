import { generateDatesFromYearBeginning } from "../utils/GenerateDatesFromYearBeginning"
import { HabitDay } from "./HabitDay"


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

export function SummaryTable() {
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
                {summaryDates.map(date => {
                    return <HabitDay key={date.toString()}/>
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
Para não fazer várias DIVs pra cada dia, nós criamos uma (CONST weekDays array) com as letras de cada dia e percorremos esse array com um map, assim nós fazemos apenas uma DIV e implatamos nossa CONST como valor da DIV, assim o map irá percorrer o array e trazer os valores automáticos.

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