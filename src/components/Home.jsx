import React,{useEffect,useState} from "react"

import Card from "../components/Card"

function Home(){

  const [post, setpost] = useState(null)

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data)=> data.json())
    .then((data)=>setpost(data))

  },[])

  // console.log("post",post);

    return(
      post?<Card allPost={post} />:null
    )
  }

export default Home