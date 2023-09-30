import React from 'react';
import './App.css';
import {RouterProvider} from "react-router-dom";
import {router} from "Router/rootRouter";

function App() {
  return (
    <div className="App">
        return <RouterProvider router={router} />
    </div>
  );
}

export default App;
