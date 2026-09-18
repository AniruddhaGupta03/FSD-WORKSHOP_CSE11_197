import ApiTester from './component/ApiiTester.jsx'

function ApiPage() {
  return (
    <main className="catalog-shell" style={{ paddingBottom: '60px' }}>
      <header className="site-header">
        <a className="brand" href="/">paper &amp; prose</a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/api">API Tester</a>
        </nav>
        <button type="button" className="cart-button" aria-label="Open reading list">
          Reader list <span>0</span>
        </button>
      </header>

      <ApiTester />

      <footer className="site-footer">
        <span>paper &amp; prose</span>
        <span>Read widely. Live deliberately.</span>
      </footer>
    </main>
  )
}

export default ApiPage
