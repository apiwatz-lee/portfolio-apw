export function EmailTemplate({ from, email, message }) {
  return (
    <div>
      <h1>New Message from {from}</h1>

      <p>email address: {email}</p>

      <p>{message}</p>
    </div>
  );
}
