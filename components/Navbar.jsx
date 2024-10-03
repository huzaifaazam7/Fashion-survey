import Link from 'next/link'



export default function Navbar() {
  return (
    <nav>
      
      <h1>It,s a survey:</h1>
      <Link href="/tickets">About Fashion</Link>
      <Link href="/">Wardrobe Wonders</Link>
      <Link href="/tickets/create">Fill Your Chioce</Link>
   
     
    </nav>
  )
}
