// pages/aws-docs.js
import { useState } from "react";

const sections = [
  {
    title: "AWS Services",
    items: [
      { id: "ec2", label: "EC2 – Elastic Compute Cloud" },
      { id: "s3", label: "S3 – Simple Storage Service" },
      { id: "rds", label: "RDS – Relational Database Service" },
      { id: "lambda", label: "Lambda – Serverless Functions" },
    ],
  },
  {
    title: "Resources",
    items: [
      { id: "pricing", label: "Pricing Overview" },
      { id: "bestpractices", label: "Best Practices" },
    ],
  },
];

const docs = {
  ec2: (
    <>
      <h1 className="text-3xl font-bold mb-4">Amazon EC2</h1>
      <p>
        Amazon Elastic Compute Cloud (EC2) provides secure, resizable compute
        capacity in the cloud. It’s designed to make web-scale cloud computing
        easier for developers.
      </p>
    </>
  ),
  s3: (
    <>
      <h1 className="text-3xl font-bold mb-4">Amazon S3</h1>
      <p>
        Amazon Simple Storage Service (S3) is object storage for the Internet.
        You can store and retrieve any amount of data at any time.
      </p>
    </>
  ),
  rds: (
    <>
      <h1 className="text-3xl font-bold mb-4">Amazon RDS</h1>
      <p>
        Amazon Relational Database Service makes it simple to set up, operate,
        and scale a relational database in the cloud.
      </p>
    </>
  ),
  lambda: (
    <>
      <h1 className="text-3xl font-bold mb-4">AWS Lambda</h1>
      <p>
        AWS Lambda lets you run code without provisioning or managing servers.
        Pay only for compute time you consume.
      </p>
    </>
  ),
  pricing: (
    <>
      <h1 className="text-3xl font-bold mb-4">Pricing Overview</h1>
      <p>AWS offers pay-as-you-go pricing. Costs vary by service and usage.</p>
    </>
  ),
  bestpractices: (
    <>
      <h1 className="text-3xl font-bold mb-4">Best Practices</h1>
      <p>
        Follow AWS Well-Architected Framework principles: cost optimization,
        performance efficiency, security, reliability, and operational
        excellence.
      </p>
    </>
  ),
};

export default function AwsDocs() {
  const [active, setActive] = useState("ec2");

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-6">Documentation</h2>
        {sections.map((sec) => (
          <div key={sec.title} className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">
              {sec.title}
            </h3>
            <ul className="space-y-1">
              {sec.items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActive(item.id)}
                    className={`block w-full text-left px-2 py-1 rounded-md transition
                      ${
                        active === item.id
                          ? "bg-gray-700 text-white"
                          : "hover:bg-gray-700 text-gray-300"
                      }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* Main content sits to the RIGHT of the sidebar */}
      <main className="flex-1 p-10 overflow-y-auto">
        <article className="prose prose-invert max-w-3xl">
          {docs[active]}
        </article>
      </main>
    </div>
  );
}
