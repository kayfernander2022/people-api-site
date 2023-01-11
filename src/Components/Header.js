//Header aka the nav
import { Link } from "react-router-dom"

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>People App</div>
      </Link>
    </nav>
  )
}

export default Header


//link tags do not reload the page like an a tag would