import React from 'react'
import MyButton from './UI/button/MyButton';


const PostItem = (props) => { //props - входные данные
    console.log(props)
  return (
    <div className="post">
        <div className="post__content">
          <strong>{props.number /* нужен для нумерации постов */ }. {props.post.title }</strong>
          <div>
            {props.post.body }
          </div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => props.remove(props.post)}> {/* remove прокинули на 2 уровня */}
            Удалить пост
          </MyButton>
        </div>
      </div>
  )
}

export default PostItem;