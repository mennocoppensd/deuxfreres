import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";


export const useAuth = () => {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status !== "loading" && !session) {
           void signIn();
        }
    }, [session, status]);
};