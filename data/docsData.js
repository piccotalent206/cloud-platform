// /data/docsData.js

const docsData = {
  infrastructure: {
    title: "Infrastructure",
    description: "Manage cloud infrastructure efficiently with CloudLedger.",
    img: "/icons/infrastructure.png",
    content: `
      <h2>Overview</h2>
      <p>Cloud infrastructure is the backbone of CloudLedger. It ensures scalable, reliable, and secure cloud environments.</p>
      <h2>Steps</h2>
      <ul>
        <li>Step 1: Set up your cloud provider account.</li>
        <li>Step 2: Configure virtual machines and networks.</li>
        <li>Step 3: Deploy required services and monitor performance.</li>
      </ul>
    `,
    code: `# Example Terraform commands
terraform init
terraform apply`
  },

  containers: {
    title: "Containers",
    description: "Deploy and orchestrate containerized applications.",
    img: "/icons/containers.png",
    content: `
      <h2>Overview</h2>
      <p>Containers package applications and dependencies for easy deployment.</p>
      <h2>Steps</h2>
      <ul>
        <li>Step 1: Build your Docker image.</li>
        <li>Step 2: Push image to registry.</li>
        <li>Step 3: Deploy using Kubernetes or Docker Compose.</li>
      </ul>
    `,
    code: `# Build and run container
docker build -t myapp .
docker run -p 8080:8080 myapp`
  },

  monitoring: {
    title: "Monitoring",
    description: "Track your system's performance and health metrics.",
    img: "/icons/monitoring.png",
    content: `
      <h2>Overview</h2>
      <p>Monitoring ensures uptime, stability, and performance of your services.</p>
      <h2>Steps</h2>
      <ul>
        <li>Step 1: Set up monitoring tools (e.g., Prometheus, Grafana).</li>
        <li>Step 2: Configure alerts and dashboards.</li>
        <li>Step 3: Continuously review metrics and logs.</li>
      </ul>
    `,
    code: `# Example: Start Prometheus server
prometheus --config.file=prometheus.yml`
  },

  security: {
    title: "Security",
    description: "Ensure compliance and secure deployments.",
    img: "/icons/security.png",
    content: `
      <h2>Overview</h2>
      <p>Security is crucial for protecting data, access, and services.</p>
      <h2>Steps</h2>
      <ul>
        <li>Step 1: Implement role-based access control.</li>
        <li>Step 2: Enable encryption for data at rest and in transit.</li>
        <li>Step 3: Perform regular security audits.</li>
      </ul>
    `,
    code: `# Example: Generate SSL certificate
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout key.pem -out cert.pem`
  },

  manual: {
    title: "Non CI/CD",
    description: "Perform controlled manual deployments when needed.",
    img: "/icons/manual.png",
    content: `
      <h2>Overview</h2>
      <p>Manual deployments give you full control over release timing and environment.</p>
      <h2>Steps</h2>
      <ul>
        <li>Step 1: Prepare deployment artifacts.</li>
        <li>Step 2: Execute deployment commands manually.</li>
        <li>Step 3: Verify deployment and monitor logs.</li>
      </ul>
    `,
    code: `# Example manual deployment
scp app.tar.gz user@server:/deployments/
ssh user@server 'tar -xzf /deployments/app.tar.gz -C /var/www/app'`
  },

  "fabric-ledger": {
    title: "Fabric Ledger",
    description: "Blockchain ledger for secure and transparent operations.",
    img: "/icons/fabric.png",
    content: `
      <h2>Overview</h2>
      <p>Fabric Ledger provides an immutable record of all transactions.</p>
      <h2>Steps</h2>
      <ul>
        <li>Step 1: Set up Hyperledger Fabric network.</li>
        <li>Step 2: Deploy chaincode for your application.</li>
        <li>Step 3: Query ledger and verify transactions.</li>
      </ul>
    `,
    code: `# Example: Start Fabric network
./startFabric.sh
# Deploy chaincode
peer lifecycle chaincode install mychaincode.tar.gz`
  },

  database: {
    title: "Database",
    description: "Manage SQL and NoSQL databases for your apps.",
    img: "/icons/database.png",
    content: `
      <h2>Overview</h2>
      <p>Databases are critical for storing and retrieving application data securely.</p>
      <h2>Supported Databases</h2>
      <ul>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>MongoDB</li>
      </ul>
    `,
    code: {
      installation: `# PostgreSQL Installation
sudo apt update
sudo apt install postgresql postgresql-contrib -y

# MySQL Installation
sudo apt update
sudo apt install mysql-server -y

# MongoDB Installation
sudo apt update
sudo apt install -y mongodb`,

      configuration: `# PostgreSQL Configuration
sudo -u postgres psql
ALTER USER postgres PASSWORD 'StrongPass123';

# MySQL Configuration
sudo mysql_secure_installation

# MongoDB Configuration
sudo systemctl enable mongod
sudo systemctl start mongod`,

      rights: `# PostgreSQL User Rights
GRANT ALL PRIVILEGES ON DATABASE cloudledger TO ledger_user;

# MySQL User Rights
GRANT ALL PRIVILEGES ON cloudledger.* TO 'ledger_user'@'%';

# MongoDB User Rights
db.grantRolesToUser("ledger_user", [{ role: "readWrite", db: "cloudledger" }])`,

      create: `# PostgreSQL Create Database
CREATE DATABASE cloudledger;

# MySQL Create Database
CREATE DATABASE cloudledger;

# MongoDB Create Database (implicit on first use)
use cloudledger`,

      delete: `# PostgreSQL Delete Database
DROP DATABASE cloudledger;

# MySQL Delete Database
DROP DATABASE cloudledger;

# MongoDB Delete Database
use cloudledger
db.dropDatabase()`
    }
  }
};

export default docsData;
