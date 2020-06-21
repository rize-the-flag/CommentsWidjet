import React from 'react';

export default class Comment extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    const {value: {userName, commentBody, dateTime}} = this.props.post;
    return (
      <div className = "post">
        <div className = "post__header">
          <span className = "post__user-name">{userName}</span>
          <button
            className = "btn-close"
            onClick = {this.props.closeBtnClick}
          >
            &#10060;
          </button>
        </div>
        <div className = "post__body">{commentBody}</div>
        <div className = "post__footer">
          <span className = "post__date">
            {dateTime}
          </span>
        </div>
      </div>
    );
  }
};
