// pages/infrastructure.js
import Link from "next/link";

export default function Infrastructure() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Infrastructure Documentation</h1>
      <p className="mb-4">
        Here are the steps and notes related to Infrastructure setup.
      </p>
      <ol className="list-decimal list-inside space-y-2">
        <li>Step 1: Provision cloud resources (AWS, Azure, etc.).</li>
        <li>Step 2: Configure networking (VPC, subnets, firewalls).</li>
        <li>Step 3: Setup CI/CD pipelines for deployments.</li>
        <li>Step 4: Monitor logs and metrics using CloudWatch or Prometheus.</li>
      </ol>

      <Link href="/" className="text-blue-600 underline mt-6 block">
        ← Back to Home
      </Link>
    </div>
  );
}
