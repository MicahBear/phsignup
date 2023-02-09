import { memo } from "react";
const InputForm = (props) => {
  const validateInput = (values) => {
    if (values.some((f) => f === "") || values[0].indexOf("@") === -1) {
      return true;
    } else {
      return false;
    }
  };

  if (props.type === "submit") {
    return (
      <input
        className="submitBtn inline-flex font-semibold rounded-md shadow-lg p-3"
        type="submit"
        value={props.label}
        disabled={validateInput(props.formValues)}
      />
    );
  } else {
    return (
      <input
        className="rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
        onChange={(e) => props.onChangeHandler(e.target.value)}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
      />
    );
  }
};

export default memo(InputForm);

// <div className="mr-2 flex-shrink flex-grow">
//   <p>Sign up to get access to beta.</p>

//   <input
//     className=" rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
//     onChangeHandler={setEmail}
//     type="email"
//     value={email}
//     placeholder="your@email.com"
//     name=""
//   />
//   <button
//     className="inline-flex font-semibold rounded-md shadow-lg p-3"
//     type="submit"
//     formValues={[email]}
//   >
//     sign up
//   </button>
// </div>
