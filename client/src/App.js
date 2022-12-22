
import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { BrowserRouter,Navigate, Routes, Route } from "react-router-dom"
import Addtopic from './pages/Addtopic';
import Test from './pages/Test';
import Showdesc from './pages/Showdesc';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/addtopic' element={<Addtopic />} />
          <Route path="/showdesc/:id" element={<Showdesc/>} />
          {/* <Route path='/test' element={<Test />} /> */}
          


        </Routes>


      </BrowserRouter>
     
    </div>
  );
}

export default App;
