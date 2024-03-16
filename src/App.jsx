import { useState } from 'react';

import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5.5,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleInputChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Duration must be greater than 0.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
