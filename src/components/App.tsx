import { useState } from 'react';

import Header from './Header';
import Form from './Form';
import Results from './Results';

import '../styles/App.css';

function App() {

  const [displayResult, setDisplayResult] = useState(false);

  return (
    <div className="App lg:h-screen w-screen bg-color-1 m-auto">
      <Header />
      {displayResult ? <Results displayResult={displayResult} /> :  <Form setDisplayResult={setDisplayResult} />}
    </div>
  );
}

export default App;
