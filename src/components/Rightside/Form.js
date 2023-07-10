import { useDispatch, useSelector } from "react-redux";
import { inputAction } from "../store/input-slice";
import { confirmActions } from "../store/confirm-slice";
import Input from "../UI/Input";
import Button from "../UI/Button";

import "./Form.css";

const Form = (props) => {
  const cardData = useSelector((state) => state.input);
  const dispatch = useDispatch();

  const cardNameHandler = (event) => {
    dispatch(inputAction.cardName(event.target.value));
  };

  const cardNumberHandler = (event) => {
    /*  - Take card number
        - Add a space after every 4 characters
    */
    function format(s) {
      return s.toString().replace(/\d{4}?(?=...)/g, "$& ");
    }
    let input = event.target.value;
    let newInput = format(input);
    dispatch(inputAction.cardNumber(newInput));
  };

  const cardMonthHandler = (event) => {
    dispatch(inputAction.cardMonth(event.target.value));
  };

  const cardYearHandler = (event) => {
    dispatch(inputAction.cardYear(event.target.value));
  };

  const cardCvcHandler = (event) => {
    dispatch(inputAction.cardCvc(event.target.value));
  };

  // validate form

  let formIsvalid = false;

  if (cardData) {
    formIsvalid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsvalid) {
      return;
    }

    console.log(cardData);

    dispatch(confirmActions.confirm());

    // reset form values

    dispatch(inputAction.reset());
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Input
        input={{
          onChange: cardNameHandler,

          label: "cardholder name",
          type: "text",
          id: "text",
          placeholder: "e.g. Ahmed Heikal",
          maxLength: "15",
          message: "Wrong username",
          pattern: "^[a-zA-Z ]+$",
          required: true,
        }}
      />
      <Input
        input={{
          onChange: cardNumberHandler,

          label: "card number",
          type: "text",
          id: "card-number",
          placeholder: "e.g. 1234 5678 7890 1234",
          maxLength: "19",
          message: "Wrong format,  numbers only",
          pattern: "^[0-9 ]+$",
          required: true,
        }}
      />
      <div className="form-exp-date">
        <div className="date">
          <Input
            input={{
              onChange: cardMonthHandler,

              label: "EXP. DATE",
              type: "text",
              id: "month",
              placeholder: "MM",
              maxLength: "2",
              message: "Can't be blank",
              pattern: "^[0-9 ]+$",
              required: true,
            }}
          />
          <Input
            input={{
              onChange: cardYearHandler,

              label: "(MM/YY)",
              type: "text",
              id: "year",
              placeholder: "YY",
              maxLength: "2",
              pattern: "^[0-9 ]+$",
              required: true,
            }}
          />
        </div>

        <Input
          input={{
            onChange: cardCvcHandler,

            label: "CVC",
            type: "text",
            id: "cvc",
            placeholder: "e.g 123",
            maxLength: "3",
            message: "Can't be blank",
            pattern: "^[0-9 ]+$",
            required: true,
          }}
        />
      </div>
      <Button type="submit">Confirm</Button>
    </form>
  );
};

export default Form;
