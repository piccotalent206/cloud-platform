import DocLayout from "../../components/DocLayout";

export default function Infrastructure() {
  return (
    <DocLayout title="Infrastructure">
      <h2>Overview</h2>
      <p>
        Cloud infrastructure is the backbone of CloudLedger. It ensures scalable,
        reliable, and secure cloud environments.
      </p>

      <h2>Steps</h2>
      <ul>
        <li>Step 1: Set up your cloud provider account.</li>
        <li>Step 2: Configure virtual machines and networks.</li>
        <li>Step 3: Deploy required services and monitor performance.</li>
      </ul>

      <pre>
        <code>{`# Example Terraform commands
terraform init
terraform apply`}</code>
      </pre>
    </DocLayout>
  );
}
