import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useQueryString() {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState(new URLSearchParams(location.search));

  useEffect(() => {
    setQuery(new URLSearchParams(location.search));
  }, [location.search]);

  const updateQuery: any = (key: string, value: string) => {
    const newQuery = new URLSearchParams(location.search);
    if (value === undefined || value === null) {
      newQuery.delete(key);
    } else {
      newQuery.set(key, value);
    }
    navigate({ search: newQuery.toString() });
  };

  const getQuery = (key: string) => query.get(key);

  return { getQuery, setQuery: updateQuery };
}

export default useQueryString;
