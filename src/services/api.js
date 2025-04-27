// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:8080/api', // Put your backend URL here
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default api;



import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch approval requests
export const fetchApprovalRequests = async () => {
  try {
    const response = await api.get('/approvals/pending');
    return response.data; // Returns the approval requests
  } catch (error) {
    throw error; // Throw the error to be handled by the calling function
  }
};

// Function to approve a request
export const approveRequest = async (id) => {
  try {
    const response = await api.post(`/approvals/approve/${id}`);
    return response.data; // Return response after approving
  } catch (error) {
    throw error; // Throw the error to be handled by the calling function
  }
};

// Function to reject a request
export const rejectRequest = async (id) => {
  try {
    const response = await api.post(`/approvals/reject/${id}`);
    return response.data; // Return response after rejecting
  } catch (error) {
    throw error; // Throw the error to be handled by the calling function
  }
};

// Default export (axios instance)
export default api;

