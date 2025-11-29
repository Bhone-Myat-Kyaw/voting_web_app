/*import { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";

type Props = {
  children: React.ReactNode;
};

type UserType = {
  name: string;
  role: string;
  admissionid: string;
};

const AuthContext = createContext<{
  user: UserType | null;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
} | null>(null);

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER}/auth/checkToken`,
        { withCredentials: true }
      );

      if (res.status === 200) {
        setUser(res.data.payload);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const value = useMemo(
    () => ({ user, isLoading, setUser, checkAuth }),
    [user, isLoading, checkAuth]
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
*/