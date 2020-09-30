import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

function App() {
  var courses=[
    {name:'Complete iOS10 dev sourse',price:199},
    {name:'Complete Full Stack course',price:299},
    {name:'Complete Development course',price:399},
    {name:'Complete React Js  course',price:499}


  ];
  return (
      
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
            <Coursesales items={courses}/>
      </header>
    </div>
  );
}

export default App;
