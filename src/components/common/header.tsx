import { Link } from "react-router-dom"
import { AuthConsumer } from "../../contexts"
import './header.scss';

export default function Header() {
  const {user} = AuthConsumer();
  return (
    <nav className="navbar">
      <div className="company-label">Authentication</div>
      {
        user ? <PrivateHeader/> : <PublicHeader/>
      }
    </nav>
  )
}

function PublicHeader() {
  return (
    <ul className="nav-items">
      <li className="nav-item">
        <Link to="/login">Login</Link>
      </li>
    </ul>
  )
}

function PrivateHeader() {
  return (
    <ul className="nav-items">
      <li className="nav-item">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li className="nav-item">
        <Link to="/signout">Signout</Link>
      </li>
    </ul>
  )
}