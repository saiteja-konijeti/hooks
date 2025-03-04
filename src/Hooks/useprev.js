import { useRef,useEffect } from "react";
export function usePrev(value){
    const ref=useRef();
    useEffect(()=>{
        ref.current=value;//holds the current value but sends old value
    },[value])
    return ref.current; //first it will send value 
    //as we know useeffect will render only when app mount and when dependency will change
    //so firts it will send effect will apply later
}