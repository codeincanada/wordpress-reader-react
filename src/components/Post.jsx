import React from "react";
import "./Post.css";

const Categories = props => {
  return (
    <ul className="InlineList">
      <li>Cat 1</li>
      <li>Cat 2</li>
    </ul>
  );
};
const Tags = props => {
  return (
    <ul className="InlineList">
      <li>Tag 1</li>
      <li>Tag 2</li>
    </ul>
  );
};

const Post = props => {
  if (!props.in) {
    return <h1>Post not loaded</h1>;
  } else {
    return (
      <article className="Post" key={props.in.id}>
        <h2 className="PostTitleContainer">
          <a href={props.in.link} className="LinkWrapper">
            <span className="PostTitle">{props.in.title.rendered}</span>
          </a>
          <span className="PostID">ID:{props.in.id}</span>
        </h2>
        <aside className="PostFooter">
          <div className="CatsAndTags">
            <Categories in={props.in.categories} />
            <Tags in={props.in.tags} />
          </div>
          <div className="ButtonContainer">
            <button id="save">Save offline</button>
            <button id="expand">Expand</button>
            <button id="hide">Hide</button>
          </div>
        </aside>
      </article>
    );
  }
};

export default Post;
