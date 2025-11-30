import { createContext, useContext } from "react";
import type { Voter } from "../../Components/Texts/voterInfo";

export interface AuthContextType {
    voter: Voter | null;
    login: (voter: Voter) => void;
}

export const AuthContext = createContext<AuthContextType>({
    voter: null,
    login: () => {},
})

export const useAuthContext = () => useContext<AuthContextType>(AuthContext);