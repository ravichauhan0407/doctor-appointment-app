import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import  {Toaster} from 'react-hot-toast'
import { Home } from './pages/Home';
import { useSelector } from 'react-redux';
import { PublicRoute } from './components/PublicRoute';
import { PrivateRoute } from './components/PrivateRoute';
import { ApplyDoctor } from './pages/ApplyDoctor';
import { Notifications } from './pages/Notifications';
import { Userslist } from './pages/Userslist';
import { Doctorslist } from './pages/Doctorslist';
function App() {

  const {loading}=useSelector((state)=>state.alerts)

  return (
    <>
     <BrowserRouter>
     {loading&&<div className='parent-spinner'><div class="spinner-border text-light" role="status">
</div></div>}
     <Toaster
  position="top-center"
  reverseOrder={false}
/>
         <Routes>
              <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}></Route>
              <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}></Route>
              <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>}></Route>
              <Route path='/apply-doctor' element={<PrivateRoute><ApplyDoctor/></PrivateRoute>}></Route>
              <Route path='/notification' element={<PrivateRoute><Notifications/></PrivateRoute>}></Route>
              <Route path='/notification' element={<PrivateRoute><Notifications/></PrivateRoute>}></Route>
              <Route path='/users-list' element={<PrivateRoute><Userslist/></PrivateRoute>}></Route>
              <Route path='/doctors-list' element={<PrivateRoute><Doctorslist/></PrivateRoute>}></Route>
         </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
