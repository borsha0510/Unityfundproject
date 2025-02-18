import React from "react";
import "./Contact.css";
import message from "../../assets/message.png";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1f3a6cc2-a560-4d8e-9d8a-deef15102141");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json(); // Parse JSON response

      if (data.success) {
        console.log("Success", data);
        setResult("Email sent successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Fetch error:", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={message} alt="" />
        </h3>
        <p>
          For any inquiries, support, or partnership opportunities, feel free to
          reach out to us. We are always here to assist you and ensure your
          contributions make a meaningful impact. Together, we can bring hope
          and help to those in need.
        </p>
        <ul>
          <li>
            <img src={email} alt="" />
            Contact@UnityFund.com
          </li>
          <li>
            {" "}
            <img src={phone} alt="" />
            +8801785909562
          </li>
          <li>
            <img src={location} alt="" /> House #23, Road #10, Block E, Banani,
            Dhaka-1213, Bangladesh
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>

          <textarea
            name="message"
            roes="6"
            placeholder="Enter your message"
            required
          />
          <button
            type="submit"
            className="btn dark-btn"
            style={{ background: "blue", color: "white" }}
          >
            Submit now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
