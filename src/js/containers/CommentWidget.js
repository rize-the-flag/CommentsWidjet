import React, { Component } from 'react';
import CommentsList from '../components/CommentsList';
import FormNewComment from '../components/FormNewComment';
import LocalStorage from '../LocalStorage';
import shortid from 'shortid';
import '../../scss/CommentWidget.scss';

export default class CommentWidget extends Component {

  state = {
    posts: [],
  };

  componentDidMount() {
    this.storage = new LocalStorage( 'CommentsWidget' );
    this.setState( {posts: [...this.storage.getStorage()]} );
  }

  deleteComment = ( hash ) => {
    const posts = this.state.posts.filter( ( post, index ) => {
      if (post.hash === hash) {
        this.storage.removeRecord( index );
        return false;
      }
      return true;
    } );

    this.setState( {posts} );
  };

  handleSubmit = ( {userName, commentBody} ) => {
    const newRecord = {
      hash: shortid.generate(),
      value: {
        userName: userName,
        dateTime: new Date().toLocaleString(),
        commentBody: commentBody,
      }
    };
    this.storage.addRecord( newRecord.hash, newRecord.value );
    this.setState( {posts: [...this.state.posts, newRecord]} );
  };

  render() {
    return (
      <div className = "comment-widget">
        <CommentsList
          posts = {this.state.posts}
          closeBtnClick = {this.deleteComment}
        />
        <FormNewComment
          onSubmit = {this.handleSubmit}
        />
      </div>
    );
  }
}
