import React from "react";
import { AuthContext, AuthContextType } from "./auth-context";

export const fakeAuthProvider = {
    isAuthenticated: false,
    signIn(callback: VoidFunction) {
        fakeAuthProvider.isAuthenticated = true;
        setTimeout(callback, 100);
    },
    signOut(callback: VoidFunction) {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    }
}

export function AuthProvider({children}: {children: React.ReactNode}) {
    let [user, setUser] = React.useState<any>(null);

    const signIn = (newUser: string, callback: VoidFunction) => {
        return fakeAuthProvider.signIn(() => {
            setUser(newUser);
            callback();
        });
    }

    const signOut = (callback: VoidFunction) => {
        return fakeAuthProvider.signOut(() => {
            setUser(null);
            callback();
        })
    }

    let value: AuthContextType = {user, signIn, signOut};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function AuthConsumer(): AuthContextType {
    return React.useContext(AuthContext);
}