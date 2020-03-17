import React, { useEffect } from 'react';
import Counter from './components/Counter';

const App = () => {

  useEffect(() => {
    console.clear()
    console.log("%cPerform an action to watch redux in action!", 
      "font-size: 2rem; color: blanchedalmond")
  }, [])

  return (
    <React.Fragment>
      <h1>counter with redux</h1>
      <em>open your console...<br/>or use the Redux DevTools to travel through time!</em>
      <Counter/>
    </React.Fragment>
  )
}

export default App;
