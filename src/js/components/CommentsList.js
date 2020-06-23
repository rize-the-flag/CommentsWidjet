import React from 'react';
import Comment from './Comment';

const CommentsList = ( {posts, closeBtnClick} ) => {
  const postsList = posts.map( ( post ) => {
    const {hash} = post;
    return (
      <li key = {hash} className = "comments-list__item">
        <Comment
          post = {post}
          closeBtnClick = {() => closeBtnClick( hash )}
        />
      </li>
    );
  } );

  return (
    <ul className = "comments-list">
      {postsList}
    </ul>
  );
};

export default CommentsList;
