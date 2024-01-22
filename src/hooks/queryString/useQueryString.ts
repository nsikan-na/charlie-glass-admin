import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useQueryString() {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState(new URLSearchParams(location.search));

  useEffect(() => {
    setQuery(new URLSearchParams(location.search));
  }, [location.search]);

  const updateQuery: any = (key: any, value: any) => {
    const newQuery = new URLSearchParams(location.search);
    if (value === undefined || value === null) {
      newQuery.delete(key);
    } else {
      newQuery.set(key, value);
    }
    navigate({ search: newQuery.toString() });
  };

  return [query, updateQuery];
}

export default useQueryString;
