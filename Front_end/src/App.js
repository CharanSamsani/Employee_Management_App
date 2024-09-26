import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
     <Router>
      <HeaderComponent/>
      <div className="container">
        <Routes>
            <Route exact path="/" element={<ListEmployeeComponent/>}></Route>
            <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
            <Route path="/add-employee" element={<CreateEmployeeComponent/>}></Route>
            <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
        </Routes>
      </div>

      <FooterComponent/>
    
    </Router> 

    </div>
  );
}

export default App;
