import React, { useState } from 'react'
import Header from './Header'
import Search from './Search'
import Filter from './Filter'
import Cards from './Cards'

import '../assets/Home.css'
import { useTheme } from '../Hook/useTheme'

const Home = () => {

  const [mode] = useTheme()

  const [searchValue, setSearchValue] = useState('')


  return (
    <div style={mode ? {background: 'rgb(15 23 42)', color: 'white'} : {background: 'white', color: 'black'}}>
      <Header />
      <div className="filters">
        <Search setSearchValue={setSearchValue} />
        <Filter setFilter={setSearchValue} />
      </div>
      <Cards searchValue={searchValue} />
    </div>
  )
}

export default Home