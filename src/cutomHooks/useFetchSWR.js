import axios from "axios";
import React, { useEffect, useState } from "react";
import useUser from "./useUser";

// Possible states -> INIT , LOADING , DONE , FAILED
const useFetchSWR = (url) => {
  const { user } = useUser();
  const { token } = user;

  const [status, setStatus] = useState("INIT");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setStatus("LOADING");
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: token,
        },
      });

      const { data } = res;
      setData(data);
      setStatus("DONE");
    } catch (error) {
      setStatus("FAILED");
      throw error;
    }
  };

  const refresh = async () => {
    try {
      await fetchData();
    } catch (error) {
      throw error;
    }
  };

  return { status, data, refresh };
};

export default useFetchSWR;
