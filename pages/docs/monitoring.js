import DocLayout from "../../components/DocLayout";

export default function Monitoring() {
  return (
    <DocLayout title="Monitoring">
      <h2>Overview</h2>
      <p>Monitoring ensures uptime, stability, and performance of your services.</p>

      <h2>Steps</h2>
      <ul>
        <li>Step 1: Set up monitoring tools (e.g., Prometheus, Grafana).</li>
        <li>Step 2: Configure alerts and dashboards.</li>
        <li>Step 3: Continuously review metrics and logs.</li>
      </ul>

      <pre>
        <code>{`# Example: Start Prometheus server
prometheus --config.file=prometheus.yml`}</code>
      </pre>
    </DocLayout>
  );
}
