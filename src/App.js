//import React from "react";
//import logo from './logo.svg';
import './App.css';
//import App from './Components/App';
import Header from '../components/ui/Header';
import {ThemeProvider} from "@material-ui/styles";
import {BrowseRouter , Route ,Switch} from "react-router-dom";
import theme from "./ui/theme";
import {Link} from "react-router-dom"

/*function app() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>
      </header>
    </div>
  );
}*/

function App() {
  return (
    <ThemeProvider theme={theme}>
     <BrowserRouter>
     <Header />
     <Switch>
       <Route excat path="/" component={()=> <div>Home</div>}/>
       <Route excat path="/services" component={()=> <div>Services</div>}/>
       <Route excat path="/about" component={()=> <div>About Us</div>}/>
       <Route excat path="/contact" component={()=> <div>Contact Us</div>}/>
       <Route excat path="/signup" component={()=> <div>Sign Up</div>}/>
     </Switch>
      hello!
     </BrowserRouter>
    
     </ThemeProvider>
  );
}

export default App;
