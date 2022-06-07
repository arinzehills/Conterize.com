import { useEffect, useState } from "react";

const usePost = ({ fetchParamData, url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  setTimeout(() => {
    const data = fetchParamData;

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.warn("Error:", error);
        setError(error.message);
      });
  }, [1000]);

  return { data, loading, error };
};
export default usePost;
