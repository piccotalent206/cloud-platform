import DocLayout from "../../components/DocLayout";

export default function FabricLedger() {
  return (
    <DocLayout title="Fabric Ledger">
      <h2>Overview</h2>
      <p>Fabric Ledger provides an immutable record of all transactions.</p>

      <h2>Steps</h2>
      <ul>
        <li>Step 1: Set up Hyperledger Fabric network.</li>
        <li>Step 2: Deploy chaincode for your application.</li>
        <li>Step 3: Query ledger and verify transactions.</li>
      </ul>

      <pre>
        <code>{`# Example: Start Fabric network
./startFabric.sh
# Deploy chaincode
peer lifecycle chaincode install mychaincode.tar.gz`}</code>
      </pre>
    </DocLayout>
  );
}
