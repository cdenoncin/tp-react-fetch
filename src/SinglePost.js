import './App.css';
import React from 'react';
import query from './api/axios';



class SinglePost extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        posts: []
      }

      this.query = query;
      
    
  }

  componentDidMount(){
    this.posts()
  }

  posts() {
      this.query.get('/posts').then(res => (this.setState({posts: res.data})));
  }

  //render() {



     // return (
     //   <div>
       //   {this.state.posts.foreach((post) => <p>{post}</p>)}
     // </div>
     // );
 //}

}

export default SinglePost;
