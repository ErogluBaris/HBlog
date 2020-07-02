import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import home from './pages/home'
import example from './pages/example';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import last from './pages/last';
import categories from './pages/categories';
import example2 from './pages/example2';
import example3 from './pages/example3';
import example4 from './pages/example4';

function App() {
  return (
  <Router>
    <div className="App"> 
      <Navbar/>
      <Route  path="/" exact component={home}/>
      <Route path="/example" component={example}/>
      <Route path="/example2" component={example2}/>
      <Route path="/sonyazilar" component={last}/>
      <Route path="/kategoriler" component={categories}/>
      <Route path="/example3" component={example3}/>
      <Route path="/example4" component={example4}/>
      <Footer/>
    </div>
  </Router>
  );
}


export default App;
