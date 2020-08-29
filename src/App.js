import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './Components/News/News';
import Header from './Components/Header/Header';
import TopHeadline from './Components/TopHeadline/TopHeadline';

function App() {
  return (
    <div>
      <h2>React Bootstrap</h2>
      <Header></Header>
      <TopHeadline></TopHeadline>
    </div>
  );
}

export default App;
