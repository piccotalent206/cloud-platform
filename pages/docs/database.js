import DocLayout from "../../components/DocLayout";

export default function Database() {
  return (
    <DocLayout title="Database">
      <h2>Overview</h2>
      <p>
        Databases are critical for storing and retrieving application data
        securely.
      </p>

      <h2>Supported Databases</h2>
      <ul>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>MongoDB</li>
      </ul>

      <h2>Examples</h2>
      <pre>
        <code>{`# PostgreSQL Installation
sudo apt update
sudo apt install postgresql postgresql-contrib -y

# MySQL Installation
sudo apt update
sudo apt install mysql-server -y

# MongoDB Installation
sudo apt update
sudo apt install -y mongodb`}</code>
      </pre>
    </DocLayout>
  );
}
