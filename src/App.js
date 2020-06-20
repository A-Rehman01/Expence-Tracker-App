import React from 'react';
import './App.css';

//Components
import Header from './Components/Header';
import Mainbalance from './Components/Mainbalance';
import  IncomeExpance from './Components/IncomeExpance';
import Transection  from './Components/Transection';
import Newtransection  from './Components/Newtransection'
import GlobalProvider  from './context/Globalcontext';

function App() {
  return (
    <div >
      <GlobalProvider>
      <Header></Header>
      <div className="container">
        <Mainbalance  ></Mainbalance>
        <IncomeExpance></IncomeExpance>
        <Transection></Transection>
        <Newtransection></Newtransection>
      </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
