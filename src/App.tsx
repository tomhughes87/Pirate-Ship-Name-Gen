import React from 'react';
// import logo1 from './logo.svg';
import './App.css';
import logo1 from './images./logo1.png';
import GeneratorFunc from './components/GeneratorFunc/GeneratorFunc';
import FirstWord from './components/FirstWord/FirstWord';
import ShipName from './components/ShipName/ShipName';
import MidWord from './components/MidWord/MidWord';
import MainWord from './components/MainWord/MainWord';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import Helper from './components/Help';




function App() {
<style>
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&display=swap');
</style>

  return (
    <div className="App">
      <header className="App-header">

        {/* <img src={logo1} className="App-logo" alt="logo" /> */}

        {/* <Menu /> */}
        <ShipName />
        <Logo />

        
        <br/>
        
        <div id='dashedBox'>
          <FirstWord />
          {/* <br/> */}
          <MidWord />
          {/* <br/> */}
          <MainWord />
          {/* <br/> */}
        </div>
        <Helper />
          <br/>
          <br/>
          {/* <br/> */}


        <div id='dashedBoxLower'>
          <GeneratorFunc />
          <br/>

        </div>



      </header>
    </div>
  );
}

export default App;
