import { Outlet } from "react-router-dom";
import './layout.scss'

export default function Layout() {
  return (
    <div className="page-container">
      <Outlet/>
    </div>
  )
}