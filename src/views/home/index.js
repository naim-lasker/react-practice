import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <Link to="/about">About</Link>
            <br />
            <Link to="/posts">Posts</Link>
        </>
    )
}
