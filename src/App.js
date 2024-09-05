
import { Route, Router, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import { DashBord } from './pages/dashbord';

function App() {
  return (
   
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashbord/*' element={<DashBord/>}></Route>
      </Routes>
  
  );
}

export default App;
