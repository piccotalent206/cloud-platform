import DocLayout from "../../components/DocLayout";

export default function Containers() {
  return (
    <DocLayout title="Containers">
      <h2>Overview</h2>
      <p>Containers package applications and dependencies for easy deployment.</p>

      <h2>Steps</h2>
      <ul>
        <li>Step 1: Build your Docker image.</li>
        <li>Step 2: Push image to registry.</li>
        <li>Step 3: Deploy using Kubernetes or Docker Compose.</li>
      </ul>

      <pre>
        <code>{`# Build and run container
docker build -t myapp .
docker run -p 8080:8080 myapp`}</code>
      </pre>
    </DocLayout>
  );
}
