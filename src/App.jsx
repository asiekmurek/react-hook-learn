import { useState, useMemo } from 'react'
import { useDebounce } from './useDebounce.jsx'
import './App.css'
import { filterCountries } from './filterCountries.js';

const countries = [
  "Poland", "Portugal", "Pakistan", "Paraguay", "Peru",
  "Panama", "Palau", "Philippines", "Papua New Guinea",
  "France", "Finland", "Fiji", "Gabon", "Germany"
];


function App() {


  const [inputText, setInputtext] = useState("");

  const handleInputChange = (e) => {
    setInputtext(e.target.value)
  }

  const debounceInputText = useDebounce(inputText, 500);

    const filteredData = useMemo(() => filterCountries(countries, inputText),[debounceInputText])

  return (
    <>
      <input type='text' value={inputText} onChange={handleInputChange} />
      {inputText === "" ? null : filteredData.length === 0 ? "nope nie ma wynikow" :
        <ul>
          {filteredData.map((item) =>
            <li key={item}>{item}</li>
          )}
        </ul>}
    </>
  )
}

export default App
