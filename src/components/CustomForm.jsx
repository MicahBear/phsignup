import { useState } from "react";
import InputForm from "./InputForm";

export default function CustomForm({ status, message, onValidated }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email && email.indexOf("@") > -1 && onValidated({ Email: email });
  };
  return <InputForm />;
}
