
import './App.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom';

function Home(){
  return(
    <h1>Home</h1>
  )
}

function About(){
  return(
    <h1>About</h1>
  )
}

function Account(){
  return(
    <h1>Account Page</h1>
  )
}
function Setting(){
  return(
    <h1>Setting Page</h1>
  )
}



function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/about' element={ <About />} />
      <Route path='/account'>
      <Route path='page' element={ <Account />} />
      <Route path='setting' element={ <Setting />} />
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
