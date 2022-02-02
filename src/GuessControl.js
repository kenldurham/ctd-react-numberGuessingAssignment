import React from "react";
import Button from "./Button";

function GuessControl({onGuess}) {
  const [currentGuess, setCurrentGuess] = React.useState("");
  function OnSubmitGuess() {
    onGuess(Number(currentGuess))
    setCurrentGuess('')
  }

  const handleInputChange = (event) => {
    const newInput = event.target.value;
    setCurrentGuess(newInput);
  };
  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
        onClick={OnSubmitGuess}
      />
      <Button onClick={OnSubmitGuess}>Submit Guess</Button>
    </div>
  );
}
export default GuessControl;
