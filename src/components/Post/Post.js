import React from 'react'
import PropTypes from 'prop-types'

import Comment from '../Comment/Comment'

import './Post.css'

const Post = props => {
  const { id, author, date, content, comments } = props.data

  return (
    <div className='postContainer'>
      <div className='postContainer__mainInfo'>
        <img
          className='postContainer__mainInfo__img'
          src={author.avatar}
        />
        <div className='postContainer__mainInfo__text'>
          <p className='postContainer__mainInfo__text__userName'>
            {author.name}
          </p>
          <span className='postContainer__mainInfo__text__postDate'>
            {date}
          </span>
        </div>
      </div>
      <p className='postContainer__mainText'>
        {content}
      </p>
      <div className='postContainer__comments'>
        {comments.map(comment => <Comment key={comment.id} data={comment} />)}
      </div>
    </div>
  )
}

Post.propTypes = {
  data: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      author: PropTypes.shape(
        {
          name: PropTypes.string.isRequired,
          avatar: PropTypes.string.isRequired
        }
      ).isRequired,
      date: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(PropTypes.shape(
        {
          id: PropTypes.number.isRequired,
          author: PropTypes.shape(
            {
              name: PropTypes.string.isRequired,
              avatar: PropTypes.string.isRequired
            }
          ).isRequired,
          content: PropTypes.string.isRequired,
        }
      ))
    }
  )
}

export default Post
