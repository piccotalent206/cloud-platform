// components/DocLayout.js
import Link from "next/link";

export default function DocLayout({ title, description, children }) {
  return (
    <div className="doc-page">
      <Link href="/" className="back-link">
        Home
      </Link>

      <h1 className="doc-title">{title}</h1>
      {description && <p className="doc-description">{description}</p>}

      <div className="doc-content">{children}</div>

      <style jsx>{`
        .doc-page {
          max-width: 800px;
          margin: 40px auto;
          padding: 24px;
          background: #f8fbff;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(34, 90, 180, 0.1);
          font-family: system-ui, sans-serif;
        }
        .back-link {
          display: inline-block;
          margin-bottom: 20px;
          color: #2563eb;
          text-decoration: none;
        }
        .doc-title {
          font-size: 2rem;
          color: #2563eb;
          margin-bottom: 10px;
        }
        .doc-description {
          font-size: 1.1rem;
          color: #374151;
          margin-bottom: 20px;
        }
        .doc-content {
          line-height: 1.6;
          color: #1f2937;
        }
      `}</style>
    </div>
  );
}
