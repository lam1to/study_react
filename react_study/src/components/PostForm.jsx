import React, { useRef, useState } from 'react';

import MyButton from './UI/Button/MyButton';
import MyInput from './UI/Input/MyInput';

const PostForm = ({create}) => {

    const [post, setPost] = useState({title:'', body:''})

    const addNewPost = (e) => {
        e.preventDefault()
          
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
      }
    return(
    <div>
        <form>
        <MyInput value = {post.title}
          onChange = {e => setPost({...post, title: e.target.value})}
          type= "text" 
          placeholder='Название поста'/>
          {/* неуправляемый/ неконтролируемый */}
        <MyInput 
        value = {post.body}
        onChange = {e => setPost({...post, body:e.target.value})}
         type= "text" placeholder='Описание поста'/>
        <MyButton  onClick = {addNewPost}>
          Добавить пост
        </MyButton>
      </form>
    </div>

    );
}



export default PostForm;