import Link from 'next/link'

const Index = () => (
  <div>
    <h1>Sawatdee Next.js</h1>
    <p>Index</p>
    <Link href="/transaction">
        <a>Transaction Page</a>
    </Link>
  </div>
)

export default Index