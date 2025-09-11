import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function EC2Course() {
  return (
    <>
      <Head>
        <title>CloudLedger Platform – AWS EC2 Course</title>
      </Head>
      <Header />
      <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <h1>AWS EC2 Course</h1>
        <p>EC2 is the virtual server in the cloud. In this module, you will learn:</p>
        <ul>
          <li>Launching EC2 Instances</li>
          <li>Security Groups & Key Pairs</li>
          <li>Elastic IP & EBS Volumes</li>
          <li>Basic troubleshooting & best practices</li>
        </ul>
      </div>
      <Footer />
    </>
  )
}

