import { AuthProvider } from '../contexts';
import RouteDefinations from '../routes/routes-definations';
import './App.scss';
import Header from './common/header';
import '../fontawesome';

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Header />
      <RouteDefinations />
    </div>
    </AuthProvider>
  );
}

export default App;
