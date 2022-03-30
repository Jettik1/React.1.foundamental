import React from 'react'


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
          <button>Удалить пост</button>
        </div>
      </div>
  )
}

export default PostItem;