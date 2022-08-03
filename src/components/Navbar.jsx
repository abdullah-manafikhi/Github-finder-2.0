import {FaGithub , FaBars} from 'react-icons/fa'
import {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {

  const [menuToggle, setMenuToggle] = useState("hidden")

  const handleClick = () => {
    switch (menuToggle){
      case "hidden" :
        return setMenuToggle("grid")
        break
      case "grid" : 
        return setMenuToggle("hidden")
        break
      default: 
      return setMenuToggle("hidden")
    }


  }

  return (
    <div className="navbar bg-gray-900">
        <div className="flex-1">
        <a className="btn btn-ghost normal-cas text-xl"> <FaGithub className='mr-4 text-3xl font-bold' /> Github Finder </a>
        </div>
        <div className="flex-none">
        <ul className={`menu menu-horizontal bg-gray-900 relative top-24 w-32  justify-center ${menuToggle} sm:top-0  sm:flex`}>
            <li><Link to='/' className='font-semibold btn btn-ghost text-md rounded-xl'>Home</Link></li>
            <li><Link to='/about' className='font-semibold btn btn-ghost text-md rounded-xl'>About</Link></li>
        </ul>
        <button className={`sm:hidde text-xl btn btn-ghost`}  onClick={handleClick} ><FaBars /></button>
        </div>
    </div>
  )
}

export default Navbar
