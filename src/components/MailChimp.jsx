import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function MailChimpFormContainer(props) {
  const actionUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=${
    import.meta.env.U
  }&id=${import.meta.env.I}`;
  return (
    <div className="mc__form-container">
      <MailchimpSubscribe url={actionUrl} />
    </div>
  );
}
