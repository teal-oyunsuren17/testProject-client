import axios from "axios";
import { useEffect, useState } from "react";

interface IMovie {
  _id: String;
  title: String;
}

export default function Home() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/movies").then((res) => {
      const { data, status } = res;
      setList(data);
    });
  }, []);

  return (
    <>
      {list.map((l) => {
        <p>{l["title"]}</p>;
      })}
    </>
  );
}
