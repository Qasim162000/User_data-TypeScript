import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username </label>
        <input
          id="username"
          value={enteredUsername}
          onChange={usernameChangeHandler}
          type="text"
        />
        <label htmlFor="age">Age (Years) </label>
        <input
          id="age"
          value={enteredAge}
          onChange={ageChangeHandler}
          type="number"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
