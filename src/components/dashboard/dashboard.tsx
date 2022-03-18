import { AuthConsumer } from "../../contexts";
import './dashboard.scss';

export default function Dashboard() {
  const {user} = AuthConsumer();
  return (
    <div className="private-page-content">
      <h1>Dashboard</h1>
      <h3>Hello {user}, Welcome to Auth Dashboard</h3>
    </div>
  )
}