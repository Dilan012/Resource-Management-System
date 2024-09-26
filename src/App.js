
import { Route, Router, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import { DashBord } from './pages/dashbord';
import { AuthProvder } from './authProvider';
import { PrivateRoute } from './PrivateRoute';

function App() {
  return (
   
      <AuthProvder>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route element={<PrivateRoute/>}>
            <Route path='/dashbord/*' element={<DashBord/>}></Route>
          </Route>
        </Routes>
      </AuthProvder>
  );
}

export default App;
