import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loading">Loading...</div>}
      <h2>Welcome to KHANVAS</h2>
      <h5>Select your inquiry</h5>
      {data && <BlogList blogs={data} title={"All Blogs"} />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Vincent van Gogh")}
        title={"Vincent's Blogs"}
      /> */}
    </div>
  );
};

export default Home;
