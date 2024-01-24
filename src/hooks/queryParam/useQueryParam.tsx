import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type TDefault = [
  {
    key: string;
    value: string;
  },
];

function useQueryParam(defaultTabs?: TDefault) {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState(new URLSearchParams(location.search));

  useEffect(() => {
    setQuery(new URLSearchParams(location.search));
  }, [location.search]);

  useEffect(() => {
    defaultTabs?.forEach(({ key, value }) => {
      if (!getQuery(key)) {
        updateQuery(key, value);
      }
    });
  }, []);

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

export default useQueryParam;
