import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Par from './pages/Prova'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact  element={<Home/>}/>
        <Route path="/prova" exact  element={<Par/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
