import { useState,useEffect } from "react";
export function useFetch(url){
    const [data,setdata]=useState({})
    const [load,setload]=useState(true)
    async function getdetails(){  //function to get data by fetching
      setload(true)
     const response=await fetch(url);
     const json=await response.json()
     setdata(json)
     setload(false)
    }

    useEffect(()=>{    //render when app component mount 
        getdetails()
    },[url])//dependency
    useEffect(()=>{
        setInterval(getdetails,10000)
    },[])

    return { data,load }
}