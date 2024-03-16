import { useEffect, useState } from "react"

const useLocalStorage =(LocalStorageKey,defaultValue)=>{
    const [value,setValue] = useState( JSON.parse(localStorage.getItem(LocalStorageKey))?? defaultValue)
    useEffect(()=>{
        localStorage.setItem(LocalStorageKey,JSON.stringify(value))
    },[LocalStorageKey,value])
    return [value,setValue]
}
export default useLocalStorage