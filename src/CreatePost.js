import './App.css';

function CreatePost() {
  return (
    <div className="add-post">
      <p>Create a post</p>
      <form action="" method="get">
          <div>
            <input type="text" name="title" id="title" placeholder="Title" required></input>
          </div>
          <div>
          <textarea id="post" name="post"
                    rows="5" cols="33">
          Write your post...
          </textarea>
          </div>
          <input type="submit" value="Publish your post"></input>
      </form>
    </div>
  );
}

export default CreatePost;
