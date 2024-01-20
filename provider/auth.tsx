import { auth } from "@/config/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextProps = {
    user: User | null;
    isLoading: boolean;
}

const authContext = createContext<AuthContextProps>({ user: null, isLoading: false });

export const AuthProvider = (props: any) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            setIsLoading(false)
        })
    }, [])

    return <authContext.Provider value={{ user, isLoading }} {...props} />
}

export default function useAuth() {
    return useContext(authContext);
}