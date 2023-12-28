import { useState } from "react";
import Nav from "../../components/nav/Nav";
import "./payment.css";
import Paymentmodal from "../../components/paymentmodal/Paymentmodal";
import { useNavigate } from "react-router-dom";



const Payment = () => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [nameinput, setnameInput] = useState();
  const [emailinput, setemailInput]= useState();
  const [creditcardNumber, setCreditCardNumber] = useState();
  const [isValid, setIsValid]= useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const handelonChange =(e)=>{
    const {value}=e.target;
    setnameInput(value);

  }

  const handelemailChange = (e)=>{
    const {value}=e.target;
    setemailInput(value);
  }

  const handelFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true)
    openModal();
  };
  const formatCreditCardNumber = (input) => {
    // Remove non-digit characters
    const digitsOnly = input.replace(/[^\d]/g, '');

    // Insert hyphens after every 4 digits
    const formattedNumber = (digitsOnly.match(/.{1,4}/g) || [])
        .join('-')
        .substr(0, 19);

    return formattedNumber;
};

const handleCardNumberChange = (e) => {
    const input = e.target.value;
    const formattedNumber = formatCreditCardNumber(input);
    setCreditCardNumber(formattedNumber);

    const pattern = /\b\d{4}[-,]\d{4}[-,]\d{4}[-,]\d{4}\b/;
    setIsValid(pattern.test(formattedNumber));
};
  return (
    <div className={`payment-container ${formSubmitted ? 'invisible': " "}`}>
      <Nav />
      <div id="checkOut">
        <h1 className="checkout-para">Checkout</h1>
        <h4 className="payment-para">Payment Details</h4>
        <form className="form" onSubmit={handelFormSubmit}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="cardName" >User Full Name : </label>
              <input
                type="text"
                class="form-control"
                id="cardName"
                placeholder="John Doe"
                onChange={handelonChange}
                value={nameinput}
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label for="cardNum">Email Address</label>
              <input
                type="email"
                class="form-control"
                id="cardNum"
                placeholder="johndoe@gmail.com"
                value={emailinput}
                onChange={handelemailChange}
                required
              />
            </div>
          </div>
          <div class="form-row">
          <div class="form-group col-md-6">
              <label for="cardNum">Card Number</label>
              <input
                type="text"
                class="form-control"
                id="cardNum"
                placeholder="0000-0000-0000"
                onChange={handleCardNumberChange}
                value={creditcardNumber}
                required
              />
            </div>
            <div class="form-group col-md-4">
              <label for="endDate">Exp: Month</label>
              <select id="endDate" class="form-control" required>
                <option selected>01</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="endDate">Year</label>
              <select id="endDate" class="form-control" required>
                <option selected>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
              </select>
            </div>

            <div class="form-group col-md-4">
              <label for="cVV">Cvv</label>
              <input
                type="password"
                class="form-control"
                id="cVV"
                placeholder="123"
                required
              />
            </div>
          </div>

          <button class="btn btn-primary" >submit</button>
        </form>
      </div>
      {showModal && <Paymentmodal inputemail={emailinput} inputname={nameinput} closeModal={closeModal}/>}
    </div>
  );
};

export default Payment;
