import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid'
import axios from 'axios'

const App = () => {

  // Hooks
  // This will be filled after API call
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Hook handlers
  useEffect(() => {
    const fetchItems = async() => {
      const result = await axios('https://www.breakingbadapi.com/api/characters')
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [])

  return (
    <div className='container'>
      <Header />
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
