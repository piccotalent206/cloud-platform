import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import docsData from "../data/docsData"; // Path to your docsData.js

export default function Home() {
  // Dynamically generate icons array from docsData
  const icons = Object.keys(docsData).map((key) => ({
    id: key,
    title: docsData[key].title,
    img: docsData[key].img,
    description: docsData[key].description,
  }));

  return (
    <>
      <Head>
        <title>CloudLedger Platform</title>
      </Head>

      <div className="page-container">
        {/* Top Banner */}
        <div className="banner fade-in">
          <Image
            src="/images/top-banner.png"
            alt="Top Banner"
            width={700}
            height={180}
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
        </div>

        {/* Heading */}
        <h1 className="heading fade-in">CloudOps</h1>
        <p className="subtitle fade-in">
          Classic Cloud Operations • Non CI/CD • Fabric BlockChain
        </p>

        {/* Center Logo */}
        <div className="logo fade-in">
          <Image
            src="/images/logo.png"
            alt="Cloud Logo"
            width={150}
            height={150}
            style={{ objectFit: "contain", width: "150px", height: "150px" }}
          />
        </div>

        {/* Icons Row */}
        <div className="icons-row fade-in">
          {icons.map((item, index) => (
            <Link
              key={item.id}
              href={`/docs/${item.id}`}
              passHref
              style={{ textDecoration: "none" }}
            >
              <div
                className="icon-card fade-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Icon */}
                <Image
                  src={item.img}
                  alt={item.title}
                  width={80}
                  height={80}
                  style={{ objectFit: "contain" }}
                />

                {/* Title */}
                <p
                  style={{
                    marginTop: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  {item.title}
                </p>

                {/* Two description lines */}
                {item.description && (
                  <>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#6B7280",
                        lineHeight: "1.4",
                        marginTop: "4px",
                      }}
                    >
                      {item.description.split(".")[0]}.
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#6B7280",
                        lineHeight: "1.4",
                      }}
                    >
                      {item.description.split(".")[1] || ""}
                    </p>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .page-container {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #f8fbff, #eaf3ff);
          padding: 20px;
          overflow: hidden;
        }

        .banner {
          margin-bottom: 2rem;
          max-width: 700px;
          width: 100%;
        }

        .logo {
          margin-bottom: 2rem;
        }

        .heading {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2563eb;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .subtitle {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: #374151;
          text-align: center;
        }

        .icons-row {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 30px;
          flex-wrap: wrap;
          width: 100%;
          max-width: 1200px;
        }

        .icon-card {
          text-align: center;
          background: #fff;
          padding: 15px;
          border-radius: 15px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
          width: 160px;
          max-width: 180px;
          flex: 1;
        }

        .icon-card:hover {
          transform: scale(1.05);
          box-shadow: 0px 6px 16px rgba(37, 99, 235, 0.4);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          opacity: 0;
          animation: fadeInUp 0.4s ease forwards;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .icons-row {
            gap: 20px;
          }
          .icon-card {
            width: 140px;
            padding: 12px;
          }
          .banner img {
            max-width: 500px;
          }
          .logo img {
            width: 120px !important;
            height: 120px !important;
          }
          .heading {
            font-size: 2rem;
          }
          .subtitle {
            font-size: 1rem;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .page-container {
            justify-content: space-evenly;
          }
          .icons-row {
            flex-wrap: wrap;
            gap: 15px;
          }
          .icon-card {
            width: 120px;
            padding: 10px;
          }
          .banner img {
            max-width: 320px;
          }
          .logo img {
            width: 100px !important;
            height: 100px !important;
          }
          .heading {
            font-size: 1.6rem;
          }
          .subtitle {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}