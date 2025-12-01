import { createContext, useContext } from "react";
import type { Voter } from "../../Components/Texts/voterInfo";

export interface AuthContextType {
    voter: Voter | null;
    login: (voter: Voter) => void;
    confirm: boolean;
    setConfirm: (value: boolean)=> void;
}

export const AuthContext = createContext<AuthContextType>({
    voter: null,
    login: () => {},
    confirm: false,
    setConfirm: () => {},
})

export const useAuthContext = () => useContext<AuthContextType>(AuthContext);