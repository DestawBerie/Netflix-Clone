import { useEffect, useState } from "react";

function Check() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);

  const canBeSubmitted = () => {
    const isValid =
      firstName.trim().length && // TextInput
      email.trim().length && // TextInput
      country.trim().length && // Dropdown
      agree; // checkbox for terms

    if (isValid) {
      document.getElementById("submitButton").removeAttribute("disabled");
    } else {
      document.getElementById("submitButton").setAttribute("disabled", true);
    }
    console.log("firstName, email, country, agree");
  };

  useEffect(() => canBeSubmitted());

  return (
    <div>
      <form action="" method="post" id="form">
        <label htmlFor="firstName">First name:</label>
        <br />
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email Address:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="country">Choose a country:</label>
        <br />
        <select
          id="country"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select..</option>
          <option value="1">USA</option>
          <option value="2">Canada</option>
          <option value="3">Algeria</option>
        </select>
        <br />
        <input
          type="checkbox"
          name="agree"
          id="agree"
          onClick={(e) => setAgree(e.target.checked)}
        />
        <label> I agree.</label>
        <br />
        <button type="submit" id="submitButton">
          Submit
        </button>
      </form>



      
    </div>
    
  );
}
export default  Check;