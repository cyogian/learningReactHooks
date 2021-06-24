import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);

  const onPostClick = (currentId) => setId(currentId);

  //   fetch PostList
  useEffect(() => {
    document.title = "Data Fetching - Learning React Hooks";
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  //   fetch Individual Post
  useEffect(() => {
    setLoadingPost(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
        setLoadingPost(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingPost(false);
      });
  }, [id]);
  return (
    <div>
      {post.id ? (
        <div id="CurrentPost">
          {loadingPost ? (
            "Loading Post..."
          ) : (
            <>
              <h2>{post.title}</h2>#{post.id}
              <hr />
              <p>{post.body}</p>
            </>
          )}
        </div>
      ) : null}
      <ul id="PostList">
        {loading
          ? "Loading Post List..."
          : posts.map((post) => (
              <li className="Post" key={post.id}>
                <button onClick={() => onPostClick(post.id)}>
                  {post.title}
                </button>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default DataFetching;
