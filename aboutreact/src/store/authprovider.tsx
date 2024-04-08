import React, { createContext, useState, useContext } from "react";

interface AuthContextType {
  authed: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const authContext = createContext<AuthContextType | undefined>(undefined);

export default function useAuth(): AuthContextType {
  const [authed, setAuthed] = useState(false);

  return {
    authed,
    login: () => {
      return new Promise((res) => {
        setAuthed(true);
        res();
      });
    },
    logout: () => {
      return new Promise((res) => {
        setAuthed(false);
        res();
      });
    },
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuthContext(): AuthContextType {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}
