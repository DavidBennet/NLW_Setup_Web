

interface ProgressBarProps {
    progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
    const progressStyle = {
        width: `${props.progress}%`
    } 

    return(
        <div className='w-full h-3 mt-4 rounded-xl bg-zinc-700'>
            <div 
                className='h-3 rounded-xl bg-violet-700 transition-all'
                style={progressStyle}
                role='progressbar'
                aria-label='Progresso de hábitos completados nesse dia'
                aria-valuenow={props.progress}
            />
        </div>
    )
}