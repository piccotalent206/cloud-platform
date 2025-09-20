// pages/aws-docs.js
import { useState } from "react";
import {
  Cloud,
  Database,
  Server,
  Box,
  DollarSign,
  ShieldCheck,
} from "lucide-react"; // icon set

const sections = [
  {
    title: "AWS Services",
    items: [
      { id: "ec2", label: "EC2 – Elastic Compute Cloud", icon: Server },
      { id: "s3", label: "S3 – Simple Storage Service", icon: Box },
      { id: "rds", label: "RDS – Relational Database Service", icon: Database },
      { id: "lambda", label: "Lambda – Serverless Functions", icon: Cloud },
    ],
  },
  {
    title: "Resources",
    items: [
      { id: "pricing", label: "Pricing Overview", icon: DollarSign },
      { id: "bestpractices", label: "Best Practices", icon: ShieldCheck },
    ],
  },
];

const docs = {
  ec2: (
    <>
      <h1 className="text-4xl font-bold mb-4 text-amber-400">Amazon EC2</h1>
      <p>
        Amazon Elastic Compute Cloud (EC2) provides secure, resizable compute
        capacity in the cloud. It’s designed to make web-scale cloud computing
        easier for developers.
      </p>
    </>
  ),
  s3: (
    <>
      <h1 className="text-4xl font-bold mb-4 text-sky-400">Amazon S3</h1>
      <p>
        Amazon Simple Storage Service (S3) is object storage for the Internet.
        You can store and retrieve any amount of data at any time.
      </p>
    </>
  ),
  rds: (
    <>
      <h1 className="text-4xl font-bold mb-4 text-emerald-400">Amazon RDS</h1>
      <p>
        Amazon Relational Database Service makes it simple to set up, operate,
        and scale a relational database in the cloud.
      </p>
    </>
  ),
  lambda: (
    <>
      <h1 className="text-4xl font-bold mb-4 text-purple-400">AWS Lambda</h1>
      <p>
        AWS Lambda lets you run code without provisioning or managing servers.
        Pay only for compute time you consume.
      </p>
    </>
  ),
  pricing: (
    <>
      <h1 className="text-4xl font-bold mb-4 text-pink-400">Pricing Overview</h1>
      <p>AWS offers pay-as-you-go pricing. Costs vary by service and usage.</p>
    </>
  ),
  bestpractices: (
    <>
      <h1 className="text-4xl font-bold mb-4 text-lime-400">Best Practices</h1>
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
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-850/90 backdrop-blur-sm p-6 border-r border-gray-700 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-6 text-white">Documentation</h2>

        {sections.map((sec) => (
          <div key={sec.title} className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">
              {sec.title}
            </h3>

            <ul className="space-y-1">
              {sec.items.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <button
                    onClick={() => setActive(id)}
                    className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg transition-all duration-200
                      ${
                        active === id
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                          : "hover:bg-gray-700/60 text-gray-300 hover:text-white"
                      }`}
                  >
                    <Icon
                      className={`w-5 h-5 flex-shrink-0 ${
                        active === id ? "text-white" : "text-gray-400"
                      }`}
                    />
                    <span className="flex-1">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10 overflow-y-auto flex justify-center">
        <article className="prose prose-invert max-w-3xl leading-relaxed">
          {docs[active]}
        </article>
      </main>
    </div>
  );
}
