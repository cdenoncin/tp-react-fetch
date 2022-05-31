import './App.css';
import SinglePost from './SinglePost';

function PostList() {
  return (
    <div className="post-list">
      <p>Tous les posts</p>
      <div>
          <SinglePost></SinglePost>
      </div>
    </div>
  );
}

export default PostList;
