import axios from "axios";

const BASE_URL = "http://localhost:8081/api/books";

// ✅ Get all books
export const getBooks = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to load books:", error);
    throw error;
  }
};

// ✅ Get book by ID
export const getBookById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to load book:", error);
    throw error;
  }
};

// ✅ Add new book
export const addBook = async (book) => {
  try {
    const response = await axios.post(BASE_URL, book);
    return response.data;
  } catch (error) {
    console.error("Failed to save book:", error);
    throw error;
  }
};

// ✅ Update book
export const updateBook = async (id, book) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, book);
    return response.data;
  } catch (error) {
    console.error("Failed to update book:", error);
    throw error;
  }
};

// ✅ Delete book
export const deleteBook = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete book:", error);
    throw error;
  }
};
