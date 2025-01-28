import { useEffect, useState } from "react"

export const Greet=()=>{
    let [userPost,setUserPost]=useState([])
    async function getUserPost(){
        let response=await fetch(`https://dummyjson.com/posts`)
        let result = await response.json();
        return result
    }
    useEffect(()=>{
        async function getPost(){
            let response = await fetch("https://dummyjson.com/posts")
            let result = await response.json()

            const PostWithUserDetails = await Promise.all(
                result.posts.slice(0,10).map(async(posts:any)=>{
                    const UserResponse= await getUserPost(posts.userID)
                    return (
                        ...posts,
                        firstName:userResponse.firstName
                    )
                })
            )
        }
    })

}

