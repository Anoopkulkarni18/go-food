
import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './screens/Login';
import "../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
