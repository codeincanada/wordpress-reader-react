import React, { useState } from "react";
import Post from "./Post/Post";
import GetCategories from "../libs/GetCategories";
import GetTags from "../libs/GetTags";
import Loader from "./Loader/Loader";

const Posts = (props:any) => {
  const [categories, setCategories] = useState();
  const [tags, setTags] = useState();

  GetTags.then(x => setTags(x));
  GetCategories.then(x => setCategories(x));

  if (!props.in) {
    return <Loader />;
  } else {
    return props.in.map((e:any) => (
      <Post in={e} tags={tags} categories={categories} key={e.id} />
    ));
  }
};

export default Posts;
