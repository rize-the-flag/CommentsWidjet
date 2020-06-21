import React from 'react';
import Comment from './Comment';

export default class CommentsList extends React.Component {

  constructor( props ) {
    super( props );
  }

  render() {
    const posts = this.props.posts.map( ( post ) => {
      return (
        <li key = {post.hash} className = "comments-list__item">
          <Comment
            post = {post}
            closeBtnClick = {() => this.props.closeBtnClick( post.hash )}
          />
        </li>
      );
    } );

    return (
      <ul className = "comments-list">
        {posts}
      </ul>
    );
  };
}
