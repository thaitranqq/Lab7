
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Dashboard from './component/Dashboard';

import Detail from './component/Detail';
import AddStaff from './component/AddStaff';
import UpdateStaff from './component/UpdateStaff';
import LoginGoogle from './LoginGoogle';




function App() {
  return (

    <div>

<Navbar/>

<Routes>

  <Route  path='/' element={<Home  />}></Route >

  <Route  path='/dashboard/:name' element={<Dashboard /> }></Route>

 
  <Route  path='/detail/:id' element={<Detail/> }></Route> 
  <Route  path='/addNewStaff' element={<AddStaff/> }></Route>
  <Route  path='/updateStaff/:id' element={<UpdateStaff/> }></Route>
  <Route  path='/login' element={<LoginGoogle/> }></Route>




</Routes>


    </div>

  

  );
}

export default App;
