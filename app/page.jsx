import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>It reflects individual tastes, societal norms, cultural values, and historical influences, shaping how people present themselves to the world and interact with others. Fashion is not only about following trends but also about personal style, creativity, and identity. Importance of Fashion</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Chioce</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>How to get good outfits?</h3>
        <p>Adjust your clothing so it works with your proportions. ...
        Wear a colour that reflects you and your daily plans. ...
        Swap sloppy cardigans for relaxed jackets. ...
        Own less shoes, choose neutral colours. ...
        Wear one accessory that significantly impacts your outfit.</p>
      </div>
      <div className="card">
        <h3>Why do I enjoy fashion?</h3>
        <p>Fashion enables people to experiment with different styles, colors, patterns, and accessories to create a unique and personalized look. Confidence and empowerment: Wearing fashionable clothing that makes them feel good can boost people's confidence and self-esteem.</p>
      </div>
    </main>
  )
}
