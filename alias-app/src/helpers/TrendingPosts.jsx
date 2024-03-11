import React, { useState } from 'react'
import Reactions from './Reactions'

function TrendingPost({ post }) {
    return (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div>
                <span>Tags: </span>
                {post.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>
            <Reactions postId={post.id} /> {/* Pass postId to Reactions component */}
        </div>
    )
}

export default TrendingPost