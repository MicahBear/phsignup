import { useEffect, useState } from "react";
import InputField from "./InputForm";

export default function CustomForm({ status, message, onValidated }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
  };
  useEffect(() => {
    if (status === "success") clearFields();
  });
  const clearFields = () => {
    setEmail("");
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        {status === "sending" && <div>sending</div>}
        {status === "error" && <div>{message}</div>}
        {status === "success" && <div>success</div>}
        <InputField
          onChangeHandler={setEmail}
          type="email"
          value={email}
          isRequired
          placeholder="your@email.com"
          name="email"
        />
        <InputField
          className="inline-flex font-semibold rounded-md shadow-lg p-3"
          label="subscribe"
          type="submit"
          formValues={[email]}
        />
      </form>
    </>
  );
}
