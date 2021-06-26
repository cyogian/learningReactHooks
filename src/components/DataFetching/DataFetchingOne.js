import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetchingOne = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError("Oops, something went wrong!");
      });
  }, []);
  return (
    <div className="Box Hook">
      {loading ? "Loading Post..." : null}
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
      {post &&
      Object.keys(post).length === 0 &&
      post.constructor === Object ? null : (
        <>
          <h4>#{post.id}</h4>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

export default DataFetchingOne;
