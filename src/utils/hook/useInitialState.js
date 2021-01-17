import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  return articles;
};

export default useInitialState;
