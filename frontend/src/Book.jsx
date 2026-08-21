function Book({ title, author, pages, price, image }) {
  return (
    <article className="book-card">
      <div className="book-cover">
        <img src={image} alt={`Cover of ${title}`} />
        <span className="book-format">Paperback</span>
      </div>
      <div className="book-content">
        <h2>{title}</h2>
        <p className="book-author">by {author}</p>
        <div className="book-details">
          <span>{pages} pages</span>
          <strong>₹{price}</strong>
        </div>
        <button type="button" className="add-button">Add to collection</button>
      </div>
    </article>
  );
}

export default Book;
