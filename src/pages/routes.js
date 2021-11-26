import React from "react";
import { ReactComponent as PersonIcon } from "@zendeskgarden/svg-icons/src/26/person.svg";

import { UsersPage } from "./Users";
import { UserPage } from "./User";

export const routes = [
  {
    name: "Users",
    path: "/users",
    Icon: PersonIcon,
    Component: UsersPage,
  },
  {
    name: "User",
    path: "/user",
    Icon: PersonIcon,
    Component: UserPage,
  },
];
