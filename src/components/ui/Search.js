import React, { useState } from 'react'

const Search = () => {

    const [text, setText] = useState('')

    return (
        <section className="search">
            <form>
                <input type='text'
                    className='form-control'
                    placeholder='Search a character'
                    value={text}
                    autoFocus
                    onChange={(e) => setText(e.target.value)} />
            </form>
        </section>
    )
}

export default Search
