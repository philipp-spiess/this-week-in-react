import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://this-week-in-react.us19.list-manage.com/subscribe/post?u=155aa5558694a008de40fe987&amp;id=9921ef9d30";

export default function SubscribeForm() {
  return (
    <MailchimpSubscribe
      url={url}
      render={props => {
        const { status, message, subscribe } = props;
        let emailRef = React.createRef();
        const submit = () =>
          emailRef.current &&
          emailRef.current.checkValidity() &&
          subscribe({
            EMAIL: emailRef.current.value
          });

        return (
          <div className="form-wrapper">
            <form onSubmit={e => e.preventDefault()}>
              <input
                ref={emailRef}
                type="email"
                placeholder="Your email"
                required
              />
              <button onClick={submit}>Subscribe</button>
            </form>
            {status === "sending" && (
              <div className="form-info">Subscribing…</div>
            )}
            {status === "error" && (
              <div
                className="form-info"
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            {status === "success" && (
              <div
                className="form-info"
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
          </div>
        );
      }}
    />
  );
}
