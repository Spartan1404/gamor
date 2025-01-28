import { useContext } from "react";
import SessionContext from "./session-context";

export const useSession = () => {
    const session = useContext(SessionContext)

    if(!session){
        throw new Error("useSession must be used within a SessionProvider");
        
    }

    return session
}