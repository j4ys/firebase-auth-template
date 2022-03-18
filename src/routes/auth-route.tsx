import { Navigate, useLocation } from "react-router-dom";
import { AuthConsumer } from "../contexts";

export default function AuthRoute({component}: any) {
  const {user}= AuthConsumer();
  const location = useLocation();

  if(!user) {
    return <Navigate to="/login" state={{from: location}} replace />;
  }

  return component;
}