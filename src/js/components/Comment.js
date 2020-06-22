import React from 'react';

const Comment = props => {
    const {value: {userName, commentBody, dateTime}} =props.post;
    return (
      <div className = "post">
        <div className = "post__header">
          <span className = "post__user-name">{userName}</span>
          <button
            className = "btn-close"
            onClick = {props.closeBtnClick}
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
};

export default Comment;
