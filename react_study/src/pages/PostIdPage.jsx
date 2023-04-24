import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching( async() => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    })
    const [fetchCommnts, isComLoading, Comerror] = useFetching( async() => {
        const response = await PostService.getCommentsByPostId(params.id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById();
        fetchCommnts();
    },[])
   
    
  return (
    <div>
        <h1>
            Вы открыли страницу поста с ID = {params.id}
        </h1>
        {isLoading
            ?   <Loader/>
            :   <div>{post.id} {post.title}</div>
        
        }
        <h1>
            Комментарии
        </h1>
        {isComLoading
            ?   <Loader/>
            :   <div>
                    {comments.map(comm => 
                        <div key={comm.id} style={{marginTop:30}}>
                            <h5>
                                {comm.email}
                                </h5>
                            <div>
                                {comm.body}
                            </div>
                        </div>
                        
                    )}
                </div>
        
        }
    </div>
  )
}

export default PostIdPage;