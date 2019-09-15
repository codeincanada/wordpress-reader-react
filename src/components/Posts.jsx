import React from "react";
import Post from "./Post";

const Posts = props => {
  if (!props.in) {
    const message = "Add loader here...";
    return <h1>{message}</h1>;
  } else {
    return props.in.map(e => <Post in={e} key={e.id} />);
  }
};

export default Posts;
