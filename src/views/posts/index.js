import React, { useEffect, useState } from 'react'

export default function Posts() {
    const [posts, setPosts] = useState([]);

    console.log('posts==>', posts);

    function getPosts() {
        const api = 'https://jsonplaceholder.typicode.com/posts';

        fetch(api)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log('data', data);
                setPosts(data)
            })
            .catch(function (error) {
                console.log('error', error);
            })
    }

    useEffect(() => {
        getPosts()
    }, [])


    if(posts.length === 0) {
        return <h3>Loading...</h3>
    }


    return (
        <>
            <h2>Post page</h2>
            <br />

            {
                posts.map(function (post) {
                    return (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>

                            <br />
                            <br />
                        </div>
                    )
                })
            }
        </>
    )
}
