import React from 'react';
// import logo1 from './logo.svg';
import './App.css';
import GeneratorFunc from './components/GeneratorFunc/GeneratorFunc';
import ShipName from './components/ShipName/ShipName';
import Logo from './components/Logo/Logo';
import Helper from './components/Help';
import Tip from './components/Tip';
import SelectWordByWord from './components/SelectWordByWord';

import { midWord,mainWord } from './data/words';
// import SortList from './data/Sort';

function App() {
<style>
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&display=swap');
</style>
console.log("Amount of midWords:",midWord.length);
console.log("Amount of mainWords:",mainWord.length);

  return (

    
    <div className="App">

      <header className="App-header">
      
      {/* <SortList /> */}
      
      <div id="fakeModal">
      
        <Logo />    
        <ShipName />
        <Helper />
    
        <br/>
          
        {/* <div id='dashedBox'>
          <FirstWord />
          <MidWord />
          <MainWord />
        </div> */}

        <div id='dashedBox'>
          <SelectWordByWord />          
        </div>

          {/* <br/> */}
          {/* <br/> */}
        <p id="Method"> ~ OR ~ </p>  
    
        <div id='dashedBoxLower'>
      
          <GeneratorFunc />
          
        </div>
      
      {/* <br/> */}
      <Tip />
      </div>
      </header>
    </div>
  );
}

export default App;
