import { IoSearchSharp } from "react-icons/io5";

import "../assets/Search.css";
import { useTheme } from "../Hook/useTheme";

const Search = ({setSearchValue}) => {

  const [mode] = useTheme()

  return (
    <div className="searchContainer" >
      <IoSearchSharp className="searchIcon" style={mode ? {background: 'rgb(15 23 42)', color: 'white'} : {background: 'white', color: 'rgb(15 23 42)'}} />
      <input
        className="searchInput"
        type="search"
        placeholder="Search for a country"
        name=""
        id=""
        onChange={(e)=>{setSearchValue(e.target.value)}}
        style={mode ? {background: 'rgb(15 23 42)', color: 'white'} : {background: 'white', color: 'rgb(15 23 42)'}}
      />
    </div>
  );
};

export default Search;
