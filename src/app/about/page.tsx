import Link from 'next/link'
import Layout from './layout'



export default function Home() {
  return (
    <div>
      <Link href={'/posts'}>posts</Link>
      <div>test</div>
    </div>
  )
}
