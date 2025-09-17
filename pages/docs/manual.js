import { useState } from "react";
import DocLayout from "../../components/DocLayout";

export default function ManualDeployment() {
  const [copied, setCopied] = useState(false);

  const deployScript = `#!/usr/bin/env bash

set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
BRANCH="tnapex-dev"

# -------------------------------
# 🔧 Configurable Variables
# -------------------------------
PM2_PROCESS="0"                       # PM2 process id or name
REMOTE_USER="root | ubuntu | ec2-user" # SSH username
REMOTE_HOST="<SERVER_IP>"             # Server IP
REMOTE_PORT="22"                      # SSH port 
REMOTE_PATH="<DOCUMENT_PATH>"         # Deployment path on server
REMOTE_PASS="<SERVER_PASSWORD>"       # Server password
GIT_USERNAME="<GITHUB_USERNAME>"
GIT_TOKEN="<GITHUB_TOKEN>"

# -------------------------------
# 1️⃣ Local Build
# -------------------------------
cd "$REPO_DIR"

mkdir -p dist_backup
if [ -d dist ]; then
  ts=$(date +%F_%H-%M-%S)
  BACKUP_ZIP="dist_backup/dist_\${ts}.zip"
  echo "📦 Creating backup: \${BACKUP_ZIP}"
  zip -r "\${BACKUP_ZIP}" dist > /dev/null && echo "✅ Backup created"
fi

rm -f dist.zip && echo "🗑️ Old dist.zip removed"
rm -rf dist && echo "🧹 Old dist/ removed"

echo "📥 Pulling latest code..."
git pull https://\${GIT_USERNAME}:\${GIT_TOKEN}@github.com/<REPO_USER>/<REPO_NAME>.git \${BRANCH}
echo "✅ Git pull success"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use 22.18.0
echo "✅ Local Node version: \$(node -v)"

read -rp "▶️ Run local npm install? [Y/N]: " run_local_npm
if [[ "\$run_local_npm" =~ ^[Yy]\$ ]]; then
  npm install
  echo "✅ Local npm install done"
else
  echo "→ Skipped local npm install"
fi

read -rp "▶️ Proceed with build? [Y/N]: " yn
if [[ "\$yn" =~ ^[Nn]\$ ]]; then
  echo "🛑 Build cancelled"
  exit 0
fi

echo "🏗️ Running npm run build..."
npm run build
echo "✅ Build succeeded"

DIST_ZIP="dist.zip"
zip -r "\${DIST_ZIP}" dist > /dev/null
echo "✅ dist.zip created"

read -rp "▶️ Run npm install on server? [Y/N]: " RUN_NPM_INSTALL
read -rp "▶️ Update .env file on server? [Y/N]: " UPDATE_ENV

echo "📤 Uploading dist.zip to server..."
sshpass -p "\${REMOTE_PASS}" scp -o StrictHostKeyChecking=no -P "\${REMOTE_PORT}" "\${DIST_ZIP}" "\${REMOTE_USER}@\${REMOTE_HOST}:\${REMOTE_PATH}/"
echo "✅ dist.zip uploaded"

sshpass -p "\${REMOTE_PASS}" ssh -o StrictHostKeyChecking=no -p "\${REMOTE_PORT}" "\${REMOTE_USER}@\${REMOTE_HOST}" bash -s << 'EOF'
set -e
cd '$REMOTE_PATH'
echo "📌 Current directory: \$(pwd)"

[ -d dist ] && rm -rf dist && echo "✅ Old dist removed"

if [ -f dist.zip ]; then
  echo "📂 Extracting new dist..."
  unzip -q dist.zip -d .
  rm -f dist.zip
  echo "✅ New dist deployed"
else
  echo "❌ dist.zip not found!"
  exit 1
fi

export NVM_DIR="\$HOME/.nvm"
[ -s "\$NVM_DIR/nvm.sh" ] && . "\$NVM_DIR/nvm.sh"
nvm use 22.18.0
echo "✅ Server Node version: \$(node -v)"

if [[ "\$RUN_NPM_INSTALL" =~ ^[Yy]\$ ]]; then
  echo "📦 Running npm install on server..."
  npm install --production
  echo "✅ Server npm install done"
else
  echo "→ Skipped npm install on server"
fi

if [[ "\$UPDATE_ENV" =~ ^[Yy]\$ ]]; then
  echo "🔧 Opening .env for editing..."
  nano .env
  echo "✅ .env updated"
fi

if ! command -v pm2 >/dev/null 2>&1; then
  echo "❌ PM2 not found. Please install PM2 globally."
  exit 1
fi
echo "✅ PM2 found: \$(pm2 -v)"

if pm2 describe '$PM2_PROCESS' >/dev/null 2>&1; then
  echo "🔄 Reloading PM2 process $PM2_PROCESS..."
  pm2 reload '$PM2_PROCESS'
else
  echo "⚠️ PM2 process not found. Starting new..."
  pm2 start dist/src/app.js --name '$PM2_PROCESS'
fi

pm2 flush '$PM2_PROCESS'
echo "📜 Showing PM2 logs (Ctrl+C to exit)"
pm2 logs '$PM2_PROCESS'
EOF
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(deployScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <DocLayout title="Non CI/CD">
      <h2>Overview</h2>
      <p>
        The detailed Non CI/CD process is good for development but not
        recommended for production.
      </p>

      <h2>Steps</h2>
      <ul>
        <li>Step 1: Prepare deployment artifacts.</li>
        <li>Step 2: Execute deployment commands manually.</li>
        <li>Step 3: Verify deployment and monitor logs.</li>
      </ul>

      <h2>Deployment Script (Sanitized)</h2>

      <div className="code-container">
        <button onClick={handleCopy} className="copy-btn">
          {copied ? "Copied!" : "Copy"}
        </button>
        <pre>
          <code>{deployScript}</code>
        </pre>
      </div>

      <style jsx>{`
        .code-container {
          position: relative;
          background: #1e1e1e; /* dark background */
          border-radius: 8px;
          padding: 16px;
          margin-top: 1rem;
          overflow-x: auto;
        }
        .code-container pre {
          margin: 0;
          color: #ffffff; /* white text */
          font-family: "Courier New", monospace;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .copy-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #2563eb;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.8rem;
          transition: background 0.2s ease;
        }
        .copy-btn:hover {
          background: #1d4ed8;
        }
      `}</style>
    </DocLayout>
  );
}
