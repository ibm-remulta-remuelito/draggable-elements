'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container" style={{margin: '10px auto', width: '600px'}}>
      <h1>Draggable Elements</h1>
      <nav>
        <ul>
          <li>
            Go to <Link href={'/source'} target='_blank'>Source</Link>
          </li>
          <li>
            Go to <Link href={'/target'} target='_blank'>Target</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
