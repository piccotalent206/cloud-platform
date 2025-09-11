// pages/docs/[id].js

import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import docsData from "../../data/docsData"; // Path to your docsData.js
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Dark theme

export default function DocPage() {
  const router = useRouter();
  const { id } = router.query;

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  // Early return while router is not ready
  if (!router.isReady) return null;

  const doc = docsData[id];

  // Apply syntax highlighting on render or tab change
  useEffect(() => {
    Prism.highlightAll();
  }, [id, activeTab]);

  // Detect if code is multi-language (object) or single string
  const hasMultipleCodes = doc?.code && typeof doc.code === "object";
  const defaultTab = hasMultipleCodes ? Object.keys(doc.code)[0] : null;

  // Set default active tab for multi-language code
  useEffect(() => {
    if (hasMultipleCodes && !activeTab) {
      setActiveTab(defaultTab);
    }
  }, [hasMultipleCodes, activeTab, defaultTab]);

  // Copy code to clipboard
  const currentCode = hasMultipleCodes
    ? doc.code[activeTab || defaultTab]
    : doc?.code;

  const copyCode = () => {
    if (currentCode) {
      navigator.clipboard.writeText(currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  // Handle missing docs
  if (!doc) {
    return (
      <div className="doc-page">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>
        <h1>Coming Soon</h1>
        <p>This documentation page is under development. Check back later!</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{doc.title} - CloudLedger Docs</title>
      </Head>

      <div className="doc-page">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>

        <div className="doc-header">
          <Image src={doc.img} alt={doc.title} width={80} height={80} />
          <h1>{doc.title}</h1>
        </div>

        <p className="doc-description">
          {doc.description || "Content coming soon..."}
        </p>

        {doc.content && (
          <div
            className="doc-content"
            dangerouslySetInnerHTML={{ __html: doc.content }}
          />
        )}

        {/* Code Section */}
        {currentCode && (
          <div className="code-block">
            {hasMultipleCodes && (
              <div className="tabs">
                {Object.keys(doc.code).map((key) => (
                  <button
                    key={key}
                    className={`tab-btn ${activeTab === key ? "active" : ""}`}
                    onClick={() => setActiveTab(key)}
                  >
                    {key.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
            <pre>
              <code className="language-sql">{currentCode}</code>
            </pre>
            <button onClick={copyCode}>
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .doc-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .back-link {
          align-self: flex-start;
          margin-bottom: 20px;
          color: #2563eb;
          text-decoration: none;
        }

        .doc-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        h1 {
          font-size: 2rem;
          color: #2563eb;
        }

        .doc-description {
          font-size: 1.1rem;
          color: #374151;
          margin-bottom: 20px;
          text-align: center;
        }

        .doc-content {
          width: 100%;
          margin-bottom: 20px;
        }

        .doc-content h2 {
          font-size: 1.4rem;
          color: #111827;
          margin-top: 20px;
        }

        .doc-content p,
        .doc-content li {
          font-size: 1rem;
          color: #4b5563;
          line-height: 1.6;
        }

        .code-block {
          width: 100%;
          position: relative;
          margin-top: 20px;
          background: #1e1e1e; /* Dark theme */
          border-radius: 10px;
          padding: 15px;
        }

        .code-block pre {
          margin: 0;
          overflow-x: auto;
          font-family: "Courier New", Courier, monospace;
          white-space: pre-wrap;
        }

        .code-block button {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 5px 10px;
          font-size: 0.9rem;
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        }

        .tab-btn {
          padding: 6px 12px;
          font-size: 0.9rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          background: #f3f4f6;
          cursor: pointer;
        }

        .tab-btn.active {
          background: #2563eb;
          color: white;
          border-color: #2563eb;
        }

        @media (max-width: 768px) {
          .doc-header {
            flex-direction: column;
            text-align: center;
          }

          .doc-header h1 {
            font-size: 1.6rem;
          }

          .doc-description {
            font-size: 0.9rem;
          }

          .code-block pre {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </>
  );
}
