import { useState, useEffect } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);
  const [externalPosts, setExternalPosts] = useState([]);

  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length); //pakai length untuk mengetahui total datanya
  };

  // fungsi [] biar ga ngerender lagi si "render" nya itu, atau ngerender sekali aja ketika dibuka
  // useEffect(() => {
  //   console.log("render");
  //   return () => {
  //     removeEventListener();
  //     clearInterval
  //     console.log("clean up")
  //   }
  // }, [posts]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setExternalPosts(json));
  }, []);

  useEffect(() => {
    console.log("ada post baru");
  }, []);

  return (
    <>
      <h1>Simple Blog</h1>

      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {/* versi asli {posts.map(({ title, tags, date }, index) => (
        <Article {...{ title, tags, date }} key ={index} />
      ))} */}

      {/* versi yang lebih pendek lagi */}
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
      <hr />
      <h2>External Posts</h2>
      {externalPosts.map((item, index) => (
        <div key={index}>
          - {item.title}
        </div>
      ))}
    </>
  );
}

export default Homepage;
