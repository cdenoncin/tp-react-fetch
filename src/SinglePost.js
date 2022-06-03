import './App.css';
import React from 'react';
import query from './api/axios';
import FormHeader from './components/FormHeader';

class SinglePost extends React.Component {
    constructor(props) {
        super(props);
        this.query = query;
        this.getPosts = this.getPosts.bind(this);
        this.renderPosts = this.renderPosts.bind(this);
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        this.query.get('/posts').then(res => (this.setState({posts: JSON.parse(res.data)})));
    }


    renderPosts() {
        return this.state.posts.map(post => {
            return (
                <div className="screen mb-5">
                    <FormHeader/>
                    <div className="screen-body post-body">
                        <div className="app-title">{post.title}</div>
                        <div className="post-content">
                            <p>{post.content}</p>
                        </div>
                    </div>
                </div>
            );
        })
    }

  render() {
        return (
            <div>
                {this.renderPosts()}
            </div>
        )
  }

}

export default SinglePost;
