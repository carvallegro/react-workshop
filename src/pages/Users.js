import React from "react";
import { UserTable } from "../features/users/usertable";
import { XXXL } from "@zendeskgarden/react-typography";

/**
 * TODO:
 * 1. fetch the users
 * 2. show a loading state
 * (Optional) 3. Display error state
 * (Optional) 4. Add a button to refresh the data
 * (Optional) 5. Add automatic refresh every 10 sec
 * @return {JSX.Element}
 * @constructor
 */
export const UsersPage = () => (
  <div>
    <XXXL tag="h1">List of users</XXXL>
    <UserTable users={[]} />
  </div>
);
