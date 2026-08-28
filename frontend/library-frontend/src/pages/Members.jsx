import React, { useState, useEffect } from "react";
import {
  getMembers,
  addMember,
  updateMember,
  deleteMember,
} from "../services/memberService";

function Members() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [editId, setEditId] = useState(null);

  // ✅ Load members on mount
  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      setLoading(true);
      const data = await getMembers();
      setMembers(data);
      setLoading(false);
    } catch {
      setError("Failed to load members.");
      setLoading(false);
    }
  };

  // ✅ Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Add or Update member
  const handleSubmit = async (e) => {
    e.preventDefault();
     // ✅ Validation
  if (!formData.name || !formData.email || !formData.phone) {
    setError("All fields are required.");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    setError("Invalid email format.");
    return;
  }

    try {
      if (editId) {
        await updateMember(editId, formData);
      } else {
        await addMember(formData);
      }
      setFormData({ name: "", email: "", phone: "" });
      setEditId(null);
      fetchMembers();
    } catch {
      setError(editId ? "Failed to update member." : "Failed to save member.");
    }
  };

  // ✅ Edit member
  const handleEdit = (member) => {
    setFormData(member);
    setEditId(member.id);
  };

  // ✅ Delete member
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      try {
        await deleteMember(id);
        fetchMembers();
      } catch {
        setError("Failed to delete member.");
      }
    }
  };

  return (
    <div className="container members-page">
      <h2>Member Management</h2>

      {loading && <p>Loading members...</p>}
      {error && <p className="error">{error}</p>}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">{editId ? "Update Member" : "Add Member"}</button>
      </form>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>
                <button onClick={() => handleEdit(member)}>Edit</button>
                <button onClick={() => handleDelete(member.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Members;
