import React, { Component } from 'react'

import Post from '../Post/Post'

import postsData from '../../assets/posts'

import './PostList.css'

class PostList extends Component {
  state = {
    posts: postsData
  }

  render() {
    return (
      <div className='postsContainer'>
        {this.state.posts.map(post => <Post key={post.id} data={post} />)}
      </div>
    )
  }
}

export default PostList
