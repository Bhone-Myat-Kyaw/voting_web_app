import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Function to fetch current user
async function fetchUser() {
  const res = await axios.get(`${import.meta.env.VITE_SERVER}/auth/checkToken`, {
    withCredentials: true,
  });
  console.log(res.data.payload);
  return res.data.payload;
}

// Custom hook
export function useUser() {
  const query = useQuery({
    queryKey: ["authUser"],
    queryFn: fetchUser,
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
    retry: false, // optional, do not retry if token invalid
  });

  return { ...query };
}