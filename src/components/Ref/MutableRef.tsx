import React, {useState , useRef , useEffect} from 'react'

export const MutableRef = () =>{
    const [timer, settimer] = useState(0)
    const intervalRef = useRef<number | null>(null)

    const stopTimer = () => {
        if(intervalRef.current) window.clearInterval(intervalRef.current)
    }
    useEffect(()=> {
        intervalRef.current = window.setInterval(()=>{
            settimer(timer => timer + 1)
        } , 1000)

        return () => {
            stopTimer()
        }
    }, [])
  return (
    <div>
        Hook Timer - {timer}
        <button onClick={() => stopTimer()}>Stop Timer </button>
    </div>
  )
}
