function Book({ title, author, pages, price }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>{title}</h2>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Pages:</strong> {pages}</p>
      <p><strong>Price:</strong> ₹{price}</p>
    </div>
  );
}

export default Book;
