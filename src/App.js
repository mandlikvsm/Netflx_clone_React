import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.scss';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Details from './Details';



function App() {
  return (
    <>
      <Router>

        <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<Details />}/>
        </Routes>
    </Router>
    
    
    </>
    
  );
}

export default App;
