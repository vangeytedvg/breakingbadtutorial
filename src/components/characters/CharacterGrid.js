import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? (<h1>Loading data...</h1>)
     : (<section className="cards">
         {items.map(item => (
            <CharacterItem key={item.char_id} item={item}>{item.name}</CharacterItem>
         ))}
     </section>)
        
}

export default CharacterGrid
