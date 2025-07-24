import { createContext, useRef, useState } from "react";

export const CounterApi = createContext([])

export function CounterProvider({children}) {

    const [count,setCount] = useState(0)
  const inputel = useRef(0)
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
  }
  function reset() {
    setCount(0)
  }
  function add() {
    setCount(count + Number(inputel.current.value))
    inputel.current.value === ''
  }
  function subtract() {
    setCount(count - Number(inputel.current.value))
   inputel.current.value === '' 
}
return ( 
    <CounterApi.Provider value={{increment,decrement,subtract,add,count,setCount,inputel,reset}}>
        {children}
    </CounterApi.Provider>
)
}