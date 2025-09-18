import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import docsData from "../data/docsData";

export default function Home() {
  const icons = Object.entries(docsData).map(([id, { title, img, description }]) => ({
    id,
    title,
    img,
    description,
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
            priority
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
        </div>

        {/* Heading */}
        <h1 className="heading fade-in">CloudOps</h1>
        <p className="subtitle fade-in">
          Cloud Operations • Non CI/CD • Fabric BlockChain
        </p>

        {/* Intro paragraph */}
        <p className="intro fade-in">
          Here you can find steps to setup a complete development and production
          server for easy deployment and cost effective
        </p>

        {/* Center Logo */}
        <div className="logo fade-in">
          <Image
            src="/images/logo.png"
            alt="Cloud Logo"
            width={120}
            height={120}
            loading="lazy"
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Icons Row */}
        <div className="icons-wrapper">
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
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={60}
                    height={60}
                    loading="lazy"
                    style={{ objectFit: "contain", marginBottom: "8px" }}
                  />
                  <p className="card-title">{item.title}</p>
                  {item.description && (
                    <>
                      <p className="card-text">
                        {item.description.split(".")[0]}.
                      </p>
                      <p className="card-text">
                        {item.description.split(".")[1] || ""}
                      </p>
                    </>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .page-container {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(180deg, #f8fbff, #eaf3ff);
          padding: 40px 20px;
        }

        .banner {
          margin-bottom: 2rem;
          max-width: 700px;
          width: 100%;
        }

        .heading {
          font-size: 2.2rem;
          font-weight: bold;
          color: #2563eb;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .subtitle {
          font-size: 1rem;
          margin-bottom: 1rem;
          color: #374151;
          text-align: center;
        }

        .intro {
          max-width: 600px;
          text-align: center;
          color: #4b5563;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 2rem;
        }

        .logo {
          margin-bottom: 2rem;
        }

        /* Wrapper now allows wrapping instead of horizontal scroll */
        .icons-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 10px 0;
        }

        .icons-row {
          display: flex;
          flex-wrap: wrap;      /* ✅ allow multiple lines */
          justify-content: center;
          gap: 24px;
          max-width: 1200px;    /* optional max width */
        }

        .icon-card {
          background: #fff;
          padding: 16px 12px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
          width: 180px;
          height: 150px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .icon-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
        }

        .card-title {
          font-size: 14px;
          font-weight: 600;
          color: #111827;
          margin: 6px 0 2px 0;
        }

        .card-text {
          font-size: 12px;
          color: #6b7280;
          line-height: 1.3;
          margin: 0;
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

        @media (max-width: 1024px) {
          .icon-card {
            width: 160px;
            height: 140px;
          }
        }

        @media (max-width: 768px) {
          .icon-card {
            width: 140px;
            height: 130px;
          }
          .heading {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
}
