import React from "react";
import MyButton from "./UI/Button/MyButton";
import '../styles/App.css';
import { useNavigate } from "react-router-dom";

const Post = (props) => {
   
    const router = useNavigate();
    console.log(router);
    return(
        <div className= 'post'>
            <div className='post__content'>
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                   {props.post.body}
                </div>

            </div>
            <div className='post__btns'>
                <MyButton onClick = {() => router(`/posts/${props.post.id}`)}>
                    Окрыть
                </MyButton>
                <MyButton onClick = {() => props.remove(props.post)}>
                    delete post
                </MyButton>
            </div>
        </div>
        
    )
}

export default Post;