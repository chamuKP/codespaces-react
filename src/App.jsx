import { useState } from 'react';
import './App.css';
import Childcom from './Childcom';


function App() {

  const [childname,setChildname]=useState("Default");
  const receiveName=(name)=>(
    setChildname(name)
  )
  return (
    <div className="App">
      <h2>Hello React I'm Parent</h2>
      <Childcom setfun={receiveName}/>
      <P>Parent: My child said: {childname}</P>
    </div>
  );
}

export default App;
