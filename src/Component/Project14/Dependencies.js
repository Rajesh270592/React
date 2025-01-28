import { useEffect, useState } from "react"


export const PostList=()=>{

const[post,setPost]=useState([])

useEffect(()=>{
    const fetchPost=async()=>{
        try{
            const PostResponse=await fetch('https://dummyjson.com/posts')
            const PostData=await PostResponse.json()
            const first10Post=PostData.posts.slice(0,10)

            const PostWithUserDetail=await Promise.all(
                first10Post.map(async(posts)=>{
                    const userResponse=await fetch(`https://dummyjson.com/users/${posts.id}`)
                    const userData=await userResponse.json()
                    return{
                        ...posts,
                        firstName:userData.firstName,
                        lastName:userData.lastName
                    }
                })
            )
            setPost(PostWithUserDetail)
        }catch(error){
            console.log(error.message)
        }
    }
    fetchPost()
},[])
    return(
        <>
       <div>
        {
            post.map((posts)=>(
                <div>
                <h3>{posts.firstName}{posts.lastName}</h3>
                <h2>{posts.title}</h2>
                <p>{posts.body}</p>
                </div>
            ))
        }
       </div>
        </>
    )
}