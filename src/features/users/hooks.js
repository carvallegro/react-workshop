import { useEffect, useState } from "react";

export const useFetchUsers = (filters = {}) => {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);


  const queryString = Object.entries(filters)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  let url = "https://jsonplaceholder.typicode.com/users";
  if (queryString) url = `${url}?${queryString}`;

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((result) => result.json())
      .then((users) => setUsers(users))
      .then(() => setLoading(false));
  }, [url]);

  return { isLoading, users };
};
