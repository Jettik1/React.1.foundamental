import "./styles/App.css";
import React, { useMemo, useRef, useState } from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFiler from "./components/PostFiler";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "A Название поста в пропсах", body: "Props.body 2" },
    { id: 2, title: "B Название 2 поста в пропсах", body: "Props.body 3" },
    {
      id: 3,
      title: "C Название поста из массива постов в пропсах",
      body: "1 Props.body",
    },
  ]);
  const [posts2, setPosts2] = useState([
    { id: 1, title: "JS", body: "Props.body" },
    { id: 2, title: "JS2", body: "Props.body" },
    { id: 3, title: "3JS  из массива постов в пропсах", body: "Props.body" },
  ]);

  const createPost = (newPost) => {
    // колбеком создаем новый элемент массива
    setPosts([...posts, newPost]); // разворачиваем старый массив и добавляем новый элемент
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id)); // нет функции remoove, чтобы удалить нужно вернуть массив без одного поста
  };






  const [filter, setFilter] = useState({sort: '', query: ''});

  const sortedPosts = useMemo(()=>{
    console.log('function sorted posts worked')
    if(filter.sort) {
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  },[filter.sort,posts]);

  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  },[filter.query, sortedPosts]) // Реализовали поиск постов



  return (
    <div className="App">
      {/* <Counter/> */}

      {/* <ClassCounter/> */}

      {/* <PostList posts={posts2} title="Список постов 2"/> */}

      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0'}}/>
      <PostFiler filter={filter} setFilter={setFilter}/>
      {sortedAndSearchedPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} /* передаем и отфильтрованный и отсортированный массив */title="Список постов 1" />
        : <div>Посты не найдены!</div>
      }

    </div>
  );
}

export default App;
