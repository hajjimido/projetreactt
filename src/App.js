import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route, Routes} from 'react-router-dom';

import Page1 from "./pages/page1"



 
  function App(){
    return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page1 />} />
      
    </Routes>
  </BrowserRouter>
 
      );
    }


export default App;
