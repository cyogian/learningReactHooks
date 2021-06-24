import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [post, setPost] = useState({});
  const onPostClick = (currentId) => setId(currentId);

  //   fetch PostList
  useEffect(() => {
    document.title = "Data Fetching - Learning React Hooks";
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   fetch Individual Post
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
      {post.id ? (
        <div id="CurrentPost">
          <h2>{post.title}</h2>#{post.id}
          <hr />
          <p>{post.body}</p>
        </div>
      ) : null}
      <ul id="PostList">
        {posts.map((post) => (
          <li className="Post" key={post.id}>
            <button onClick={() => onPostClick(post.id)}>{post.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
