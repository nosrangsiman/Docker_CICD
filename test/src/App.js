import logo from './logo.svg';
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [userName, setUsername] = useState('')

  useEffect(()=>{
    getNames();
    
  },[])

  const getNames = async() => {
    const response = await axios.get('/api');
    console.log(response);
    setUsername(response.data);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>This is workshop react-docker-cicd</h1>
        <p>
          present by {userName}
        </p>
      </header>
      
    </div>
  );
}

export default App;
