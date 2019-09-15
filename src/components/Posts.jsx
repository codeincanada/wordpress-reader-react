import React, { useState } from "react";
import Post from "./Post";
import GetCategories from "../libs/GetCategories";
import GetTags from "../libs/GetTags";

const Posts = props => {
  const [categories, setCategories] = useState();
  const [tags, setTags] = useState();

  GetTags.then(x => setTags(x));
  GetCategories.then(x => setCategories(x));

  if (!props.in) {
    const message = "Add loader here...";
    return <h1>{message}</h1>;
  } else {
    return props.in.map(e => (
      <Post in={e} tags={tags} categories={categories} key={e.id} />
    ));
  }
};

export default Posts;
