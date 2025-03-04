//use ref is reference to value or element 
//value of ref does not rerender when the componenet rerender
//change in the value of ref.current does not cause a copmponent rerender
 


import { useEffect,useRef, useState } from "react";

export function Focuson(){
    const prev=useRef(null)// Create a reference
    function handle(){
        prev.current.focus()
    }

    return<>
    <input type="text" ref={prev} placeholder="Name" />
    <button onClick={handle}>Submit</button>
    </>
}

//example 2

export function Prevel(){
    const [count,setcount]=useState(0);
    const prev =useRef(count)
    useEffect(()=>{
      prev.current=count
      
    })
    return <>
    <p>Current val:{count}</p>
    <br></br>
    <p>previoue val:{prev.current}</p>
    <button onClick={()=>{setcount(count+1)}}>Increase</button>
    </>

}
//example 3


export function Timer() {
    const [seconds, setSeconds] = useState(0);
    const timerRef = useRef(null); // Store the interval ID
  
    function startTimer() {
      if (!timerRef.current) {
        timerRef.current = setInterval(() => {
          setSeconds((s) => s + 1);
        }, 1000);
      }
    }
  
    function stopTimer() {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  
    useEffect(() => {
      return () => clearInterval(timerRef.current); // Cleanup on unmount
    }, []);
  
    return (
      <>
        <p>Time: {seconds} sec</p>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
      </>
    );
  }
  