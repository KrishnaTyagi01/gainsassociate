import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom'
import Main from "./components/MainComponent";

function App () {
  useEffect( () => {
    console.clear();
  } )
  return (
    <HashRouter>
      <div className="App">
        <Main />
      </div>
    </HashRouter>
  );
}

export default App;
