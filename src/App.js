import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import React from "react";
import Edit from "./pages/Edit";
import {data} from "./components/data"

class App extends React.Component {
  getData = () => {
    localStorage.setItem("data", JSON.stringify(data))
  }

  componentDidMount = () => {
    this.getData();
  }

  render(){
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/edit" element={<Edit/>}/>

        </Routes>
        </BrowserRouter>
    </div>
  )
  }
}

export default App;
