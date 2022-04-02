import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({create}) => { // получаем доступ к функции createPost через пропс create

    // const [title, setTitle] = useState('') // помести сюда текст
  // const [body, setBody] = useState('')
  const [post, setPost] = useState({title: '', body: ''})
  // const bodyInputRef = useRef(); // позволяет получить доступ к DOM-елементу и у него получить value
  const addNewPost = (e) => {
    e.preventDefault();
    // setPosts([...posts,{...post, id: Date.now()}]) // разварачиваем старый массив в новый и добавляем Новый пост в массив // у нас нет доступа к этому состоянию из этого файла, для этого мы используем Create
    const newPost = {
        ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})//очищение инпутов после ввода
  }

  return (
    <form>
      {/* Управляемый компонент */}
        <MyInput
        value={post.title} // <- двустороннее связывание
        onChange={e => setPost({...post, title: e.target.value})} // <- двустороннее связывание
        type="text"
        placeholder="Название поста"/>

      {/* Неуправляемый компонент */}
        {/* <MyInput ref={bodyInputRef}
        type="text"
        placeholder="Описание поста"/> */}

        <MyInput
        value={post.body} // <- двустороннее связывание
        onChange={e => setPost({...post, body: e.target.value})} // <- двустороннее связывание
        type="text"
        placeholder="Название поста"/>

        <MyButton onClick={addNewPost} /* <- двустороннее связывание */
         /* disabled /* <- disabled передаст значение внутрь корневого элемента чтобы кнопка была не активна */>Создать пост</MyButton>
      </form>
  )
}

export default PostForm