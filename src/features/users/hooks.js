import React, { useEffect, useState } from "react";

export const useFetchUsers = () => {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((users) => setUsers(users))
      .then(() => setLoading(false));
  }, []);
  return { isLoading, users };
};
