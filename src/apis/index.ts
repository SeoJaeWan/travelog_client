import axios from "axios";

const customAxios = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const GET = async <T>(url: string): Promise<T> => {
  const res = await customAxios.get(url);

  return res.data;
};

const POST = async <T>(url: string, body?: T, contentType?: string) => {
  const res = await customAxios.post(url, body, {
    headers: {
      "Content-Type": contentType || "application/json",
    },
  });

  return res.data;
};

const PATCH = async <T>(url: string, body?: T) => {
  const res = await customAxios.patch(url, body);

  return res.data;
};

const PUT = async <T>(url: string, body?: T) => {
  const res = await customAxios.put(url, body);

  return res.data;
};

const DELETE = async (url: string) => {
  const res = await customAxios.delete(url);

  return res.data;
};

export { GET, POST, PUT, PATCH, DELETE };
