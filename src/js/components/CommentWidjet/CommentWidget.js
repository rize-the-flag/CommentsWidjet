import React, { Component } from 'react';
import CommentsList from './CommentsList';
import FormNewComment from './FormNewComment';
import WidgetStorage from './WidgetStorage';
import shortid from 'shortid';
import '../../../scss/CommentWidget.scss';

export default class CommentWidget extends Component {
  constructor( props ) {
    super( props );
    this.storage = new WidgetStorage( 'CommentsWidget' );
    this.state = {
      posts: [
        ...this.storage.getStorage(),
      ]
    };
  }

  deleteComment( hash ) {
    const posts = this.state.posts.filter( post => post.hash !== hash );
    this.setState( {posts} );
    this.storage.removeRecord(hash);
  }

  handleSubmit( {userName,  commentBody}) {
    const newRecord = {
      hash: shortid.generate(),
      value: {
        userName: userName,
        dateTime: new Date().toLocaleString(),
        commentBody: commentBody,
      }
    };
    this.storage.addRecord(newRecord.hash, newRecord.value);
    this.setState( {posts: [...this.state.posts, newRecord]} );
  }


  render() {
    return (
      <div className = "comment-widget">
        <CommentsList
          posts = {this.state.posts}
          closeBtnClick = {this.deleteComment.bind( this )}
        />
        <FormNewComment
          onSubmit = {this.handleSubmit.bind( this )}
        />
      </div>
    );
  }
}
