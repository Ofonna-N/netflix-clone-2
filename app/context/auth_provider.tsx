import { createContext, useMemo, useState, type ReactNode } from "react";

// TODO: Look at react docs for new context api
export default function AuthProvider({ children }: { children: ReactNode }) {
  const [toggleUser, setToggleUser] = useState(false);

  const user: User | null = useMemo(() => {
    return toggleUser
      ? {
          name: "John Doe",
          email: "testemail@yahoo.com",
        }
      : null;
  }, [toggleUser]);

  function toggleUserAccount() {
    setToggleUser((prev) => !prev);
  }

  const contextValue = useMemo(
    () => ({
      user,
      toggleUserAccount,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

type AuthContextT = {
  user: User | null;
  toggleUserAccount: () => void;
};

type User = {
  name: string;
  email: string;
};

export const AuthContext = createContext<AuthContextT>({} as any);
