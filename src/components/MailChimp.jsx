import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function MailChimpFormContainer(props) {
  const actionUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
  return (
    <div className="mc__form-container">
      <MailchimpSubscribe url={actionUrl} />
    </div>
  );
}
