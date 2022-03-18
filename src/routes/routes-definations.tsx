import { Route, Routes } from "react-router-dom";
import NotFound from "../components/common/not-found";
import SingOut from "../components/common/signout";
import Dashboard from "../components/dashboard/dashboard";
import Layout from "../components/layout/layout";
import Login from "../components/login/login";
import AuthRoute from "./auth-route";

export default function RouteDefinations() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/" element={<AuthRoute component={<Layout/>} /> }>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/signout" element={<SingOut/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  )
}