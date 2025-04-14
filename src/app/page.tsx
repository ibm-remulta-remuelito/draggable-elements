'use client'
import Link from 'next/link'

export default function Home() {
  const handleClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(href, '_blank', 'width=800,height=600');
  };
  return (
    <div className="container" style={{margin: '10px auto', width: '600px'}}>
      <h1>Draggable Elements</h1>
      <nav>
        <ul>
          <li>
            Go to <Link href={'/source'} onClick={handleClick('/source')}>Source</Link>
          </li>
          <li>
            Go to <Link href={'/target'} onClick={handleClick('/target')}>Target</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
