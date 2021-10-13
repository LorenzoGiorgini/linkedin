import { useState, useEffect } from "react"
import SinglePost from "./SinglePost";




const ExistingPosts = () => {

    const [posts , setPosts ] = useState([])

    const fetchPosts = async () => {
        try {
            let response = await fetch(
              `https://striveschool-api.herokuapp.com/api/posts/`,
              {
                headers: {
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MzRkZGE4OTBjYzAwMTVjZjA3ZjAiLCJpYXQiOjE2MzM5NTcwODUsImV4cCI6MTYzNTE2NjY4NX0.0KiKm3Nj5tYFKqs2AZK3KMWJf7ldhr1wmccH_VdoyjU",
                },
              }
            );
            if (response.ok) {
                let data = await response.json();
                console.log(data)
                setPosts(data)
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchPosts()
    }, [])


    return (
        <div>
        {
            posts.length > 0 &&
            posts.map((element) => {
                <SinglePost element={element} />
            })
        }
        </div>
    )
}

export default ExistingPosts