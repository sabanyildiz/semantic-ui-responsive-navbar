import { Button , ButtonGroup, Card} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import LoginForm from './pages/Login';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';





function App() {
  return (
<>
<Navbar/>
<Dashboard/>
</>
  );
}

export default App;
