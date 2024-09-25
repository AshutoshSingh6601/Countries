import { FaRegMoon } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";

import '../assets/Header.css'
import { useTheme } from '../Hook/useTheme';

const Header = () => {

  const [mode, setMode] = useTheme()

  const handleMode = () =>{
    setMode(!mode)
    localStorage.setItem('Theme', !mode)
  }


  return (
    <div className='header' >
        <div className="headerLogo">
            <h2>Where in the world?</h2>
        </div>
        <div className="darkLight">
        <div className="Mode" onClick={handleMode}>{mode ? <MdOutlineWbSunny /> : <FaRegMoon />}{mode ? <p>Light Mode</p> : <p>Dark Mode</p>}</div>
        </div>
    </div>
  )
}

export default Header