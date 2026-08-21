import './App.css'
import Book from './Book.jsx'
import books from './books.js'

function App() {
  return (
    <main className="catalog-shell">
      <header className="site-header">
        <a className="brand" href="/">paper &amp; prose</a>
        <nav aria-label="Primary navigation">
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
        </nav>
        <button type="button" className="cart-button" aria-label="Open reading list">
          Reading list <span>0</span>
        </button>
      </header>

      <section className="intro" id="about">
        <p className="eyebrow">A considered shelf</p>
        <h1>Good books,<br /><em>well chosen.</em></h1>
        <p className="intro-copy">Stories and ideas to keep close, selected for curious minds and slow afternoons.</p>
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
