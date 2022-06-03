import './App.css';
import SinglePost from './SinglePost';
import query from './api/axios';

function PostList() {
  return (
    <div className="post-list">
      <h2 className="app-title color-white mb-3">Tous les posts</h2>
      <div>
          <SinglePost/>
      </div>
    </div>
  );
}

export default PostList;
