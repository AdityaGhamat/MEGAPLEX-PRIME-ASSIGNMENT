import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
export const api = {
  getContent: async () => {
    const response = await axios.get(`${API_URL}/cms/content`);
    return response.data;
  },

  login: async (credentials: { email: string; password: string }) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
  },

  updateSection: async (sectionId: string, content: any) => {
    const response = await axios.put(
      `${API_URL}/cms/content/${sectionId}`,
      content
    );
    return response.data;
  },
};
