import React, { Component } from 'react';
import './App.css';
import Wrapper from './Wrapper';
import Nav from './Nav';
import Data from './Data';
import Name from './Name';


class App extends Component {
  render() {
  return (
  <Wrapper>
    <Nav
      title="Welcome to Keilin's Irish Dance Page!"
     />
    <Data>
      Keilin's Irish Dance Page
    </Data>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
             <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Upcoming Events</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Albums
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">First Feis</a>
          <a class="dropdown-item" href="#">St. Patric's Day 2019</a>
        </div>
          </li>
          </ul>
          </div>
        </nav>
      </Wrapper>
    );
  }
 }
    
export default App;
