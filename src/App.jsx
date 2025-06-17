import { useState } from 'react'
import './App.css'

function App() {

  const myTags = [
    { id: 1, value: "aaa"},
    { id: 2, value: "bbb"},
  ]

  const addTag = () => {
    let id = Math.random()
    let value = Math.random().toString(36)
    const newTag = {id: id, value: value}
    setTag( [...tag, newTag])
  }
    
    
  const [tag, setTag] = useState(myTags)

  return (
    <>
     {tag.map( (item) => 
      <div key={item.id}>
        <li>{item.id}</li>
        <li>{item.value}</li>
      </div>
     

    )}
     <button onClick={addTag}>Add Tag</button>
    </>
  )
}

export default App
