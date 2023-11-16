import React, { useEffect,useState } from 'react';
import Card from "./Card"
import { useParams } from 'react-router-dom';



function Post(props) {
  const [post, setpost] = useState(null)
const {postId} = useParams();
console.log(postId);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((data)=>data.json())
    .then((data)=>setpost(data))
  },[postId])


  return (
   
    <Card allPost={post ? [post] : []} />
   
  );
}

export default Post;
