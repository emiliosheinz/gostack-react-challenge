import React from 'react'
import PropTypes from 'prop-types'

import './Comment.css'

const Comment = (props) => {
  const { id, author, content } = props.data

  return (
    <div className='commentContainer'>
      <img
        src={author.avatar}
        className='commentContainer__img'
      />
      <p className='commentContainer__text'>
        <span className='commentContainer__text__name'>{author.name}</span>
        {content}
      </p>
    </div>
  )
}

Comment.propTypes = {
  data: PropTypes.shape(
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
  ).isRequired
}

export default Comment
