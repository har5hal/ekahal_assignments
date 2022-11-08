import React, { useState } from "react";

export const UserContext = React.createContext();
export const UserContextProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([]);

  return (
    <UserContext.Provider value={{ usersData, setUsersData }}>
      {children}
    </UserContext.Provider>
  );
};
