/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import Paginator from "../components/Paginator";
import Card from "../components/Card";
import Header from "../components/Header";
function Api() {
  const [postPerPage, setPostPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [url, setUrl] = useState(`https://jsonplaceholder.typicode.com/posts`);
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, [url]);
  const lastPostIndex = postPerPage * currentPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const slicedData = data.slice(firstPostIndex, lastPostIndex);
  return (
    <section className="h-full bg-gray-200  flex-col justify-center align-self-center ">
      <Header />
      <article className="grid px-40 pt-8 grid-cols-2 gap-5">
        {slicedData.map((item) => (
          <Card item={item} />
        ))}
      </article>
      <Paginator
        totalPosts={data.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}

export default Api;
