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
      
      <div id="fakeModal">
        <ShipName />
        <Logo />  
        <br/>
    
        <br/>
          
        <div id='dashedBox'>
          {/* <p id="Method">Method 1:</p> */}
          <FirstWord />
          <MidWord />
          <MainWord />
        </div>

        
          <br/>
          {/* <br/> */}
        <p id="Method"> ~ OR ~ </p>  
          {/* <br/> */}
          <br/>
        <div id='dashedBoxLower'>
        {/* <p id="Method">Method 2:</p>   */}
          <GeneratorFunc />
          <br/>
        </div>
      <br/>
      <br/>
      <Helper />
      
      </div>
      </header>
    </div>
  );
}

export default App;
