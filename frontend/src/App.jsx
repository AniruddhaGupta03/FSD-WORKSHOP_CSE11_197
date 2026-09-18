import './App.css'
import Book from './Book.jsx'
import books from './books.js'

function App() {
  const featuredBook = books[0]

  return (
    <main className="catalog-shell">
      <header className="site-header">
        <a className="brand" href="/">paper &amp; prose</a>
        <nav aria-label="Primary navigation">
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="/api">API Tester</a>
        </nav>
        <button type="button" className="cart-button" aria-label="Open reading list">
          Reading list <span>0</span>
        </button>
      </header>

      <section className="intro" id="about">
        <div className="intro-copy-wrap">
          <p className="eyebrow">A considered shelf</p>
          <h1>Good books,<br /><em>well chosen.</em></h1>
          <p className="intro-copy">
            Stories and ideas to keep close, selected for curious minds and slow afternoons.
          </p>

          <div className="cta-row">
            <a href="#collection" className="primary-btn">Browse collection</a>
            <a href="/api" className="secondary-btn">API demo</a>
          </div>

          <div className="stats-row" aria-label="Store highlights">
            <div>
              <strong>1200+</strong>
              <span>titles</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>reader rating</span>
            </div>
            <div>
              <strong>48h</strong>
              <span>dispatch</span>
            </div>
          </div>
        </div>

        <div className="hero-card" aria-label="Featured book highlight">
          <img src={featuredBook.image} alt={`Featured book: ${featuredBook.title}`} />
          <div className="hero-badge">
            <strong>{featuredBook.title}</strong>
            <span>Editors’ pick</span>
          </div>
        </div>
      </section>

      <section className="collection" id="collection">
        <div className="section-heading">
          <h2>Featured collection</h2>
          <span>{books.length} titles</span>
        </div>
        <div className="book-grid">
          {books.map((book) => <Book key={book.id} {...book} />)}
        </div>
      </section>

      <footer className="site-footer">
        <span>paper &amp; prose</span>
        <span>Read widely. Live deliberately.</span>
      </footer>
    </main>
  )
}

export default App
