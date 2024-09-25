import { useState } from "react"

export const useFilter = (getData ) => {

    const [searchValue, setSearchValue] = useState('')

    const filterData = getData.filter((ele)=>ele.toLowerCase().includs(searchValue))

    const getSearchValue = (e) =>{
        setSearchValue(e.target.value)
    }

  return {searchValue, getSearchValue, filterData}
}
