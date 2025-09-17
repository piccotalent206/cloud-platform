import DocLayout from "../../components/DocLayout";

export default function ManualDeployment() {
  return (
    <DocLayout title="Non CI/CD">
      <h2>Overview</h2>
      <p>
        The detailed Non CI/CD process is good for development but not
        recommended for production.
      </p>

      <h2>Steps</h2>
      <ul>
        <li>Step 1: Prepare deployment artifacts.</li>
        <li>Step 2: Execute deployment commands manually.</li>
        <li>Step 3: Verify deployment and monitor logs.</li>
      </ul>

      <pre>
        <code>{`# Example manual deployment
scp app.tar.gz user@server:/deployments/
ssh user@server 'tar -xzf /deployments/app.tar.gz -C /var/www/app'`}</code>
      </pre>
    </DocLayout>
  );
}
