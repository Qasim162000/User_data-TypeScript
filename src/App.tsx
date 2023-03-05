import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

type Apptypes = {};
const App: React.FC<Apptypes> = () => {
  const [usersList, setUsersList] = useState<
    { name: string; age: string; id: string }[]
  >([]);

  const addUserHandler = (uName: string, uAge: string) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
