import { useEffect, useRef, useState } from 'react'

import './App.css'
import Navbar from './Components/NAvbar'
import Cards from './Components/Cards'

function App() {

  const [result, setResult] = useState([])
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = () => {
    fetchApi(search)
  }
  const logoClick = () => {
    setSearch('')
    setResult([])
    console.log('Reset');
    search === '' ? setError(<h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-red-600'>Nothing to show</h1>) : '' 
  }
  const fetchApi = async (query) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      let data = await response.json();
      console.log(data.meals)
      setResult(data.meals)
      if (data.meals === null) {
        setError(<h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-red-600'>Error Occured Recipe Doesn't Exist</h1>)
        setResult([])
      }
      else {
        setError('')
        setResult(data.meals)
      }
    } catch (error) {
      setError('<h1>Recipe Doesnt Exist</h1>')
      console.log(error)
    }
  }

  //Mistakes: I was seting setResult instead of setSearch
  let refer = useRef()


  useEffect(() => {
    // setSearch('cake')
    fetchApi(search)
    // setSearch('')
  }, [])

  return (
    <>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} logoClick={logoClick} />
      <Cards result={result} errorRef={error} />

    </>
  )
}

export default App
