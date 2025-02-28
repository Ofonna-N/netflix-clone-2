import { createContext, useMemo, type ReactNode } from "react";

// TODO: Look at react docs for new context api
export default function AuthProvider({ children }: { children: ReactNode }) {
  const user: User = useMemo(() => {
    return {
      name: "John Doe",
      email: "testemail@yahoo.com",
    };
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

type User = {
  name: string;
  email: string;
};

export const AuthContext = createContext<User | null>(null);
