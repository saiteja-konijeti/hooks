//In react you can't store add in variables like js you can but in react you need to use 
//state management 
//UseState let you give current state 
//ANd also provide a function to update the state
//Example
//counter app...
import { useState } from "react";

export function Counter(){
    const [count,setcount]=useState(0)
    function increase(){
        setcount(c=>c+1)
    }
    function decrease(){
        setcount(c=>c-1)
    }
    return<>
    <p>{count}</p>
    <button onClick={increase}>INCREASE</button>
    <button onClick={decrease}>decrease</button>
    </>
}
/*  function App() {
    return <Counter />;
  }
  
  export default App; */

  //Example two

  export function Changec() {
    const [on, setOn] = useState(true);
  
    function cc() {
      setOn(prev => !prev);
    }
  
    return (
      <>
        <p style={{ color: on ? 'Green' : 'red' }}>Hello</p>
        <br />
        <button onClick={cc}>Change Color</button>
      </>
    );
  }