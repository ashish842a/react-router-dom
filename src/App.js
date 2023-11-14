
import './App.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Account from './components/Account';
import Setting from './components/Setting';
import SayName from './components/SayName';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/about' element={ <About />} />

      <Route path='/user/:username' element={ <SayName />} />


      <Route path='/account'>
      <Route path='page' element={ <Account />} />
      <Route path='setting' element={ <Setting />} />
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
