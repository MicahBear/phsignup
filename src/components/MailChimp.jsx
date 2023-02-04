import{useState} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {

  const [email, setEmail] = useState('');

  return (
    <form>
    <div className="mr-2 flex-shrink flex-grow">
      <p>Sign up to get access to beta.</p>

      <InputField
        className=" rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
        onChangeHandler={setEmail}
        type="email"
        value={email}
        placeholder="your@email.com"
        name=""
      />
      <InputField
        label="subscribe"
        className="inline-flex font-semibold rounded-md shadow-lg p-3"
        formValues={email}
        type="submit"
      />
     
    </div>
  </form>
  );
};

export default function MailChimpFormContainer(props) {
  const actionUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
  return (
    <div className="mc__form-container">
      <MailchimpSubscribe 
      url={actionUrl}
      render={({ subscribe, status, message }) => (
        <CustomForm
            status={status} 
            message={message}
            onValidated={formData => subscribe(formData)}
        />
    )}
      />
    </div>
  );
}
