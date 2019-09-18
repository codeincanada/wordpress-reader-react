import React, { useState } from "react";
import "./App.scss";
import GetPosts from "./libs/GetPosts";
import Posts from "./components/Posts";

function App() {
  // Hooks - Local State
  const [posts, setPosts] = useState();
  // Getting data
  GetPosts.then(x => setPosts(x));
  // JSX template
  return (
    <div className="App">
      <Posts in={posts} />
    </div>
  );
}

export default App;
