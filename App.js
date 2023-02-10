import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import Post from  "./components/Post";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'C++', body: 'Description'},
    {id: 3, title: 'Python', body: 'Description'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const [selectedSort, setSelectedSort] = useState('')

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="sort By"
          options = {[
            {value: 'title', name: 'By Title'},
            {value: 'body', name: 'By Description'},
          ]}
        />
      </div>
      {posts.length !== 0 
      ? <PostList remove={removePost} posts={posts} title="Post list"/> 
      : <h1 style={{textAlign: 'center'}}>Posts not found</h1>}
    </div>
  );
}

export default App;
