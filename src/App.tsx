import React from 'react';
import './App.css';
import MainPage from "./MainPage/MainPage";
import {RouterProvider} from "react-router-dom";
import {router} from "Router/rootConfig";


function App() {
  return (
    <div className="App">
        return <RouterProvider router={router} />;
    </div>
  );
}

export default App;
