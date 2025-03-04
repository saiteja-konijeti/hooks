//Useeffect will render only when the dependency value render 
//Example
//if we dont give dependency then only render at app mount 
import { json } from "express";
import { useEffect,useState } from "react";

export function Timer(){
  const [count,setcount]=useState(0)
  useEffect(()=>{

    function icrease(){
        setcount(count=>count+1)
    }
    setInterval(icrease,1000)
  },[])

  return<>
  <p>{count}</p>
  </>
}

//if we not use clock inside useeffect every time the count renders
//new clock will run 
//performance issue 

//Another example fecthing api and providong data



export function Fetchdd() {
  const [data, setData] = useState(""); // Initialize as an empty string
  const [items, setItems] = useState([]); // Store fetched data

  useEffect(() => {
    async function fetchData() {
      if (!data) return; // Prevent fetching if data is empty

      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/${data}`);
        const json = await res.json();
        setItems(json);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    fetchData(); // Call the function inside useEffect
  }, [data]); // Run when `data` changes

  return (
    <>
      <button onClick={() => setData("posts")}>Posts</button>
      <button onClick={() => setData("users")}>Users</button>
      <button onClick={() => setData("comments")}>Comments</button>

      {items.map((item, index) => (
        <pre key={index}>{JSON.stringify(item, null, 2)}</pre>
      ))}
    </>
  );
}


