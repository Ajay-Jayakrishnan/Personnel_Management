import './App.css';
import LoginForm from './components/LoginForm';
import { Routes, Route } from 'react-router-dom'
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';
import AddNew from './components/AddNew';
import UpdateData from './components/UpdateData';
import NoPage from './components/NoPage';

function App() {
  return (

    <div>



      <Routes>
        <Route path='/' element={<LoginForm />}></Route>
        <Route path='register' element={<RegisterForm />}></Route>
        <Route path='/home/:id' element={<Home />}></Route>
        <Route path='/home/addnew/:id' element={<AddNew />}></Route>
        <Route path='/home/update/:id' element={<UpdateData />}></Route>
        <Route path='*' element={<NoPage></NoPage>}></Route>
      </Routes>



    </div>

  );
}

export default App;
