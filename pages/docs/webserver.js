import DocLayout from "../../components/DocLayout";

export default function Webserver() {
  return (
    <DocLayout title="Webserver">
      <h2>Overview</h2>
      <p>
        store website files and deliver web content via HTTP/HTTPS
      </p>

      <h2>Webservers widely used</h2>
      <ul>
        <li>Nginx</li>
        <li>Apache2</li>
      </ul>

      <h2>Steps for Nginx</h2>
      <pre>
        <code>{`# Nginx Installation
sudo apt update
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx

# nginx configuration file for node application
# nginx configuration file for react application
# nginx configuration file for angular application`}</code>
      </pre>
      
<h3>Steps for Apache2</h3>
      <pre>
        <code>{`# Apache2 Installation
sudo apt update
sudo apt install apache2 -y`}</code>
      </pre>
    </DocLayout>
  );
}
