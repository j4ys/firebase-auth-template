import { useNavigate } from "react-router-dom";
import { AuthConsumer } from "../../contexts";

export default function SingOut() {
  const {signOut} = AuthConsumer();
  const navigate = useNavigate();

  
  const signoutComplete = () => {
    navigate("/login", {replace: true});
  }

  signOut(signoutComplete);

  return(
    <div className="signout">Signing Out</div>
  )
}