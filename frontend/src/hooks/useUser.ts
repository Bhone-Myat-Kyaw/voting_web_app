import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Function to fetch current user
async function fetchUser() {
  const res = await axios.get(`${import.meta.env.VITE_SERVER}/auth/checkToken`, {
    withCredentials: true,
  });
  
  return res.data.payload;
}

// Custom hook
export function useUser() {
  const query = useQuery({
    queryKey: ["authUser"],
    queryFn: fetchUser,
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
    retry: false,
  });

  return { ...query };
}
