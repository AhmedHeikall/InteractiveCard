import { useDispatch } from "react-redux";
import { confirmActions } from "../store/confirm-slice";
import { iconComplete } from "../../assets/index";
import Button from "../UI/Button";

import "./Complete.css";

const Complete = () => {
  const dispatch = useDispatch();

  const continueHandler = () => {
    dispatch(confirmActions.continue());
  };

  return (
    <div className="complete">
      <img src={iconComplete} alt="" aria-hidden="true" />
      <h1>THANK YOU!</h1>
      <p>We've added your card details</p>
      <Button type="submit" onClick={continueHandler}>
        Continue
      </Button>
    </div>
  );
};

export default Complete;
