import React from 'react';

function PostList({ posts }) {
  return (
    <div>
      <h2>Bai Viet</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
