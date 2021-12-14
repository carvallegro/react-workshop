import { useEffect, useState } from "react";

// 1. Generic error handling ✅
// 2. (Optional) User not found
// 3. (Optional) Server error
export const useFetchUsers = (filters = {}) => {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState()

  const queryString = Object.entries(filters)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  let url = "https://jsonplaceholder.typicode.com/users";
  if (queryString) url = `${url}?${queryString}`;

  useEffect(() => {
    setLoading(true)

    fetch(url)
      .then((result) => result.json())
      .then((users) => setUsers(Array.isArray(users) ? users : []))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [url]);

  return { isLoading, users, error };
};
