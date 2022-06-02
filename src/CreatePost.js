import './App.css';
import React from 'react';
import query from './api/axios';
import CreateForm from './components/CreateForm';

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.query = query;
        this.createPost = this.createPost.bind(this);
        this.state = {
            title: "",
            content: "",
        }
    }

    createPost(e) {
        e.preventDefault();

        this.query.post('/posts', {
            title: this.state.title,
            content: this.state.content
        }).then(r => console.log(r));
    }

    render() {
        return (
            <CreateForm title="Create post" submit="create" submitFn={this.createPost}>
                <div className="app-form-group">
                    <input value={this.state.title} onChange={e => this.setState({title: e.target.value})} className="app-form-control" placeholder="TITLE"/>
                </div>
                <div className="app-form-group">
                    <textarea value={this.state.content} onChange={e => this.setState({content: e.target.value})} className="app-textarea-control" placeholder="CONTENT"/>
                </div>
            </CreateForm>
        );
    }

}
export default CreatePost;
