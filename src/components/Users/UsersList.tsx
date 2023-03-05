import React from "react";
import styles from "./UsersList.module.css";
import Card from "../UI/Card";

type UsersListProps = {
  users: { name: string; age: string; id: string }[];
};

const UsersList = (props: UsersListProps) => {
  return (
    <div className={styles.users}>
      <Card>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name}: {user.age} years old
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default UsersList;
