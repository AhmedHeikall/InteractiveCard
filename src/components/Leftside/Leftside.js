import { useSelector } from "react-redux";
import { backCard, cardLogo, frontCard } from "../../assets/index";
import "./Leftside.css";

const Leftside = (props) => {
  let cardInfo = useSelector((state) => state.input);

  return (
    <div className="card">
      <div className="back-card">
        <img src={backCard} alt="" aria-hidden="true" />
        <div className="cvc">
          <span>
            {cardInfo.cardCvc.trim() === "" ? "000" : cardInfo.cardCvc}{" "}
          </span>
        </div>
      </div>
      <div className="front-card">
        <img src={frontCard} alt="" aria-hidden="true" />
        <div className="card-details">
          <img src={cardLogo} alt="" aria-hidden="true" />
          <span className="card-number">
            {cardInfo.cardNumber.trim() === ""
              ? "0000 0000 0000 0000"
              : cardInfo.cardNumber}
          </span>
          <div className="info">
            <span className="cardholder-name">
              {cardInfo.cardName.trim() === ""
                ? "AHMED HEIKAL"
                : cardInfo.cardName}
            </span>
            <span className="exp-date">
              {cardInfo.cardMonth.trim() === "" ? "00" : cardInfo.cardMonth}/
              {cardInfo.cardYear.trim() === "" ? "00" : cardInfo.cardYear}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftside;
