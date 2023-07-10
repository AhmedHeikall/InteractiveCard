import { useState } from "react";

// To Handle Form Input and Validation
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [message, setMessage] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const onBlurHandler = (event) => {
    setIsTouched(true);
  };

  const setMessageHandler = (message) => {
    setMessage(message);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    message,

    valueChangeHandler,
    onBlurHandler,
    setMessageHandler,
    reset,
  };
};

export default useInput;
