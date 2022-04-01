import "./styles/App.css";
import React, { useRef, useState } from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Название поста в пропсах", body: "Props.body" },
    { id: 2, title: "Название 2 поста в пропсах", body: "Props.body" },
    {
      id: 3,
      title: "Название 3 поста из массива постов в пропсах",
      body: "Props.body",
    },
  ]);
  const [posts2, setPosts2] = useState([
    { id: 1, title: "JS", body: "Props.body" },
    { id: 2, title: "JS2", body: "Props.body" },
    { id: 3, title: "JS 3 из массива постов в пропсах", body: "Props.body" },
  ]);

  const createPost = (newPost) => {
    // колбеком создаем новый элемент массива
    setPosts([...posts, newPost]); // разворачиваем старый массив и добавляем новый элемент
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id)); // нет функции remoove, чтобы удалить нужно вернуть массив без одного поста
  };

  return (
    <div className="App">
      {/* <Counter/> */}

      {/* <ClassCounter/> */}

      {/* <PostList posts={posts2} title="Список постов 2"/> */}

      <PostForm create={createPost} />
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title="Список постов 1" />
        : <div>Посты не найдены</div>
      }

    </div>
  );
}

export default App;
