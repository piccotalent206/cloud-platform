import Link from "next/link";

export default function FabricLedgerViewer() {
  return (
    <div
      style={{
        maxWidth: "780px",
        margin: "40px auto",
        padding: "32px",
        background: "#f8fbff",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(34,139,187,0.06)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#1e293b",
          marginBottom: "1.2rem",
        }}
      >
        Fabric Ledger Notes
      </h1>
      <ol
        style={{
          fontSize: "1.1rem",
          color: "#374151",
          lineHeight: "2",
        }}
      >
        <li>Set up Hyperledger Fabric network.</li>
        <li>Configure peers and orderers.</li>
        <li>Deploy chaincode.</li>
        <li>Query and update ledger.</li>
      </ol>
      <div style={{ marginTop: "2rem" }}>
        <Link href="/">
          <span
            style={{
              color: "#6366f1",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            ← Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}
