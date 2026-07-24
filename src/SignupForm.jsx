import { useState } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(value) {
  const trimmed = value.trim();
  if (trimmed.length === 0) return "Email is required";
  if (!EMAIL_PATTERN.test(trimmed)) return "Enter a valid email address";
  return null;
}

function SignupForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      setSubscribed(false);
      return;
    }
    setError(null);
    setSubscribed(true);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="email">Email address</label>
      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-describedby={error ? "email-error" : undefined}
        aria-invalid={error ? "true" : "false"}
      />
      {error && <p id="email-error" role="alert">{error}</p>}
      {subscribed && !error && <p role="status">Subscribed!</p>}
      <button type="submit">Subscribe</button>
    </form>
  );
}

export default SignupForm;