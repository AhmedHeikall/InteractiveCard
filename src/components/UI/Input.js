import { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [focused, setIsFocused] = useState(false);

  const focusedHandler = () => {
    setIsFocused(true);
  };

  return (
    <div className="input-box invalid">
      {props.input.label && (
        <label htmlFor={props.input.id}>{props.input.label}</label>
      )}
      <input
        {...props.input}
        onBlur={focusedHandler}
        focused={focused.toString()}
      />
      <span className="err-msg">{props.input.message}</span>
    </div>
  );
};

export default Input;
