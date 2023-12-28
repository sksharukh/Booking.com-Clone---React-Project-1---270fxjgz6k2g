import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <div className="mailContainer">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDescription">
          Sign up and We'll send the best deals for you
        </span>
        <div className="mailInputContainer">
          <input
            type="text"
            className="mailInputDetails"
            placeholder="Your email address"
          />
          <button className="mailInputBtn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default MailList;
