// import { loadEnv } from "vite";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";
export default function MailChimpFormContainer(props) {
  //   const userId = import.meta.env.VITE_ID;
  const actionUrl = `${import.meta.env.VITE_URL}`;
  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={actionUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
}
