import React from 'react';
import Comment from './Comment';

const CommentsList = props => {
    const posts = props.posts.map( ( post ) => {
      return (
        <li key = {post.hash} className = "comments-list__item">
          <Comment
            post = {post}
            closeBtnClick = {() => props.closeBtnClick( post.hash )}
          />
        </li>
      );
    } );

    return (
      <ul className = "comments-list">
        {posts}
      </ul>
    );
}

export default CommentsList;
