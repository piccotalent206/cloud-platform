import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '10px', background: '#eee' }}>
      <Link href="/">Home</Link>
      <Link href="/courses/aws-ec2">EC2</Link>
      <Link href="/courses/aws-s3">S3</Link>
      <Link href="/courses/aws-lambda">Lambda</Link>
      <Link href="/courses/aws-vpc">VPC</Link>
      <Link href="/courses/aws-iam">IAM</Link>
    </nav>
  )
}
