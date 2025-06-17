import { useEffect, useState } from 'react'
import './App.css'

function App() {

const [count, setCount] = useState(0)

useEffect( () => {
  console.log("Licznik zmienił się na: " + count)

  return () => {
    console.log("Komponent odmontowany")
  };
}, [count]);


const handleCount = () => {
  setCount(count + 1)
}

  return (
    <>
      <span>{count}</span>
      <button onClick={handleCount} >Zwiększ</button>

    </>
  )
}

export default App
