import { useState } from "react";

export default function SubscribeForm() {
  const FORM_URL = import.meta.env.VITE_CKIT;
  const [status, setStatus] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      });
      const json = await response.json();
      if (json.status === "success") {
        setStatus("SUCCESS");
        return;
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  return (
    <>
      <div>
        {status === "SUCCESS" && <div>success</div>}
        {status === "ERROR" && (
          <div>
            <p>Oops, something went wrong...</p>
            <p>
              Please,{" "}
              <button onClick={() => setStatus(null)}>try again.</button>
            </p>
          </div>
        )}
      </div>
      {status === null && (
        <form method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <input
            className="rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
            aria-label="Your email address"
            name="email_address"
            placeholder="Your email address"
            required
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
          <button className="inline-flex font-semibold rounded-md shadow-lg p-3">
            subscribe
          </button>
        </form>
      )}
    </>
  );
}
