import React, { useState } from 'react';
import Intro from './components/Intro';

function App() {
  const [isIntro, setIsintro] = useState(true);

  const onViewPortfolio = () => setIsintro(false);

  return (
    <>
      <Intro isIntro={isIntro} onViewPortfolio={onViewPortfolio} />
      <div>hello world</div>
    </>
  );
}

export default App;
