import { useState } from "react";
import type {ReactNode} from "react";
import type { Voter } from "../../Components/Texts/voterInfo";
import { setWithExpiry } from "../../helpers/storage";
import { AuthContext } from "./AuthConstant";


type Props = {
    children: ReactNode;
}




export const AuthContextProvider = ({children} : Props) => {
    const [voter, setVoter] = useState<Voter | null>(null);
    const two_days = 2 * 24 * 60 * 60 * 1000;
    const login = (v: Voter) => {
        setVoter(v);
        setWithExpiry("voter", v, two_days);
    }
    return (
        <AuthContext.Provider value={{voter, login}}>
            {children}
        </AuthContext.Provider>
    );
}