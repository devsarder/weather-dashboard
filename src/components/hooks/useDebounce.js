import { useRef } from "react"

const useDebounce = (callback,delay)=>{
    const timeOutIdRef = useRef(null)
    const debouncedCallback=(...args)=>{
        if(timeOutIdRef.current){
            clearTimeout(timeOutIdRef.current)
        }

        timeOutIdRef.current = setTimeout(()=>{
            callback(...args)
        },delay)
    }
    return debouncedCallback;
}
export default useDebounce;