import "./App.css";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import React, { useState } from "react";

interface UserInputState {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

const App: React.FC = () => {
  const [userInput, setUserInput] = useState<UserInputState>({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(
    inputIdentifier: keyof UserInputState,
    newValue: string
  ) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue,
    }));
  }

  return (
    <div className="min-h-screen m-0 font-quicksand antialiased text-e1eeeb bg-radial-gradient">
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="text-center">
          {" "}
          Please enter a duration greater than zero
        </p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </div>
  );
};

export default App;
