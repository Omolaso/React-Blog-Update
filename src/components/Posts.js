import React, { useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import '../App.css';


const Posts = () => {
    const [ post, setPost ] = useState('');

    function makePosts(){
        const postFormat = {
                id: uuid(),
                title: post,
                author: "typicode"
            }

        if(post.length > 0){
            axios.post('http://localhost:3000/posts', postFormat)
            .then(() => alert('Post Made'));
        }else{
            alert('Please make a post')
        }
        setPost('')
    }

    function handleSetPost(e){
        setPost(e.target.value)
    }

  return (
    <div>
        <h1>Posts</h1>
        <input type="text" value={post} placeholder='New Post' id='input' onChange={handleSetPost}/>
        <button onClick={makePosts}>Post</button>
    </div>
  )
}

export default Posts