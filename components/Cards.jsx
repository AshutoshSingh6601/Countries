import React, { useEffect, useState } from 'react'
import ShimmerForCard from './ShimmerForCard'

import '../assets/Cards.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../Hook/useTheme'

const Cards = ({searchValue, filter}) => {

    const [mode] = useTheme()

    const [country, setCountry] = useState([])

    const countryAPI = () =>{
        fetch('https://restcountries.com/v3.1/all')
        .then((res)=>res.json())
        .then((data)=>setCountry(data))
    }

    useEffect(()=>{
        countryAPI()
    }, [])    

    const SearchedValue = country.filter((count)=> count.name.common.toLowerCase().includes(searchValue.toLowerCase()) || count.region.toLowerCase().includes(searchValue.toLowerCase())) 

    if(SearchedValue.length === 0){
        // return <div className="">Loading...</div>
        return <div className=""><ShimmerForCard /></div>
    }

  return (
    <div className='cardsContainer'>
        {
            SearchedValue.map((countryData)=>{
                return(
                    // key={countryData.tld ? countryData.tld[0] : countryData.cca2}
                    <Link key={countryData.name.common} className="card" to={`/${countryData.name.common}`} state={countryData}  style={mode ? {background: 'rgb(15 23 42)', color: 'white'} : {background: 'white', color: 'black'}}>
                        {/* {console.log(countryData.tld ? (countryData.tld[0],'--------------') : (countryData.cca2,'===================='))} */}
                        <img src={countryData.flags.svg} alt="" />
                        <div className="content">
                            <h2>{countryData.name.common}</h2>
                            <p> <span className='bold'>Population: </span> {countryData.population.toLocaleString('en-IN')} </p>
                            <p> <span className='bold'>Region: </span> {countryData.region} </p>
                            <p> <span className='bold'>Capital: </span> {countryData.capital?.[0]} </p>
                        </div>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Cards