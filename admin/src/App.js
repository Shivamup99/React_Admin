import React, { useContext } from 'react'
import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from "./pages/Home";
import Lists from './pages/Lists';
import SingleUser from './pages/SingleUser';
import NewItem from './pages/NewItem';
import {userInput,productInput} from './arrayData/formInput'
import './styles/mode.scss'
import { DarkModeContext } from './context/modeContext';
function App() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? 'app dark':'app'}>
    <Router>
      <Routes>
        <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='users'>
        <Route index element={<Lists/>}/>
        <Route path=':userid' element={<SingleUser/>}/>
        <Route path='new' element={<NewItem inputs={userInput} title='Add New User'/>}/>
        </Route>
        <Route path='products'>
        <Route index element={<Lists/>}/>
        <Route path=':productid' element={<SingleUser/>}/>
        <Route path='new' element={<NewItem inputs={productInput} title='Add New Product'/>}/>
        </Route>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
