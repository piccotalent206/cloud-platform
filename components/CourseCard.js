import Link from 'next/link'

export default function CourseCard({ course }) {
  return (
    <div className="card">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <Link href={`/courses/${course.id}`} style={{ color: '#00ffff', fontWeight: 'bold' }}>Start Learning →</Link>
    </div>
  )
}

