import DocLayout from "../../components/DocLayout";

export default function Security() {
  return (
    <DocLayout title="Security">
      <h2>Overview</h2>
      <p>Security is crucial for protecting data, access, and services.</p>

      <h2>Steps</h2>
      <ul>
        <li>Step 1: Implement role-based access control.</li>
        <li>Step 2: Enable encryption for data at rest and in transit.</li>
        <li>Step 3: Perform regular security audits.</li>
      </ul>

      <pre>
        <code>{`# Example: Generate SSL certificate
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout key.pem -out cert.pem`}</code>
      </pre>
    </DocLayout>
  );
}
