import React from "react";
import {Cases} from "./components/Cases/Cases";
import {Message} from "./components/Messages/Messages";
import './App.css';
import {Names} from "./components/Names/Names";


function App() {
    return (
        <div className="container">
            <Message />
            <Cases />
            <Names />
        </div>
    );
}

export default App;
