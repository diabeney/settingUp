import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Components/Header';
import Articles from './Pages/Articles';
import Contribute from './Pages/Contribute';
import Error from './Pages/Error';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header />}>
        <Route path='Articles' element = {<Articles />} />
        <Route path='Contribute' element={<Contribute />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);



