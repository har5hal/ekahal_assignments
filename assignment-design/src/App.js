import React from 'react';
import './assets/scss/style.scss';
import Header from './components/Header';
import Home from './layout/Home';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
        <Header></Header> 
        <div className='content'>
          <Home></Home>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
