import React, { useState, useEffect } from "react";
import {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} from "../services/bookService";

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    available: "",
  });
  const [editId, setEditId] = useState(null);

  // ✅ Load books on mount
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const data = await getBooks();
      setBooks(data);
      setLoading(false);
    } catch {
      setError("Failed to load books.");
      setLoading(false);
    }
  };

  // ✅ Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Add or Update book
  const handleSubmit = async (e) => {
    e.preventDefault();

     // ✅ Validation
  if (!formData.title || !formData.author || !formData.isbn) {
    setError("All fields are required.");
    return;
  }
  if (!/^\d+$/.test(formData.isbn)) {
    setError("ISBN must be numeric.");
    return;
  }
  if (formData.isbn.length !== 13) {
    setError("ISBN must be 13 digits long.");
    return;
  }

    try {
      if (editId) {
        await updateBook(editId, formData);
      } else {
        await addBook(formData);
      }
      setFormData({ title: "", author: "", isbn: "", available: "" });
      setEditId(null);
      fetchBooks();
    } catch {
      setError(editId ? "Failed to update book." : "Failed to save book.");
    }
  };

  // ✅ Edit book
  const handleEdit = (book) => {
    setFormData(book);
    setEditId(book.id);
  };

  // ✅ Delete book
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await deleteBook(id);
        fetchBooks();
      } catch {
        setError("Failed to delete book.");
      }
    }
  };

  return (
    <div className="container books-page">
      <h2>Book Management</h2>

      {loading && <p>Loading books...</p>}
   {error && <p className="error">{error}</p>}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <input
          name="isbn"
          placeholder="ISBN"
          value={formData.isbn}
          onChange={handleChange}
          required
        />
        <input
          name="available"
          placeholder="Available (true/false)"
          value={formData.available}
          onChange={handleChange}
          required
        />
        <button type="submit">{editId ? "Update Book" : "Add Book"}</button>
      </form>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>{book.available ? "Yes" : "No"}</td>
              <td>
                <button onClick={() => handleEdit(book)}>Edit</button>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
