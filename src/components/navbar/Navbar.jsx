import "./navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
      <Link to={'/'}>
        <img src="https://i.imgur.com/Wemh10J.png" alt="Logo" className="logo" />
      </Link>
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div> 
      </div>
    </div>
  )
}

export default Navbar