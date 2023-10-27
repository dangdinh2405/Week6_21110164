import React, { useState, useEffect } from 'react';
import Header from './Header';
import PostList from './PostList';
import PostDetail from './PostDetail';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((data) => setPosts(data))
    // Tải dữ liệu bài viết từ API hoặc dữ liệu giả mạo ở đây
    // Ví dụ: fetch('https://api.example.com/posts').then((response) => response.json()).then((data) => setPosts(data));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <PostList posts={posts} />
          </Route>
          <Route path="/post/:id">
            <PostDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;