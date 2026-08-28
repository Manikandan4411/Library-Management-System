import axios from "axios";

const BASE_URL = "http://localhost:8082/api/members";

// ✅ Get all members
export const getMembers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to load members:", error);
    throw error;
  }
};

// ✅ Get member by ID
export const getMemberById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to load member:", error);
    throw error;
  }
};

// ✅ Add new member
export const addMember = async (member) => {
  try {
    const response = await axios.post(BASE_URL, member);
    return response.data;
  } catch (error) {
    console.error("Failed to save member:", error);
    throw error;
  }
};

// ✅ Update member
export const updateMember = async (id, member) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, member);
    return response.data;
  } catch (error) {
    console.error("Failed to update member:", error);
    throw error;
  }
};

// ✅ Delete member
export const deleteMember = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete member:", error);
    throw error;
  }
};
