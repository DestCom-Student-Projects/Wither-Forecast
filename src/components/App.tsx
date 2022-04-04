import { useState } from 'react';

import Form from './Form';
import Results from './Results';

import '../styles/App.css';

function App() {

  const [displayResult, setDisplayResult] = useState(false);

  return (
    <div className="App lg:h-screen w-screen flex item-center m-auto bg-color-1">
      {displayResult ? <Results displayResult={displayResult} setDisplayResult={setDisplayResult} /> :  <Form displayResult={displayResult}  setDisplayResult={setDisplayResult} />}
    </div>
  );
}

export default App;
