import React, { useState } from 'react';

const FormNewComment = props => {

  const [userName, setUserName] = useState('');
  const [commentBody, setCommentBody] = useState('');
  const {onSubmit} = props;

  function handleSubmit(ev) {
    ev.preventDefault();
    onSubmit({userName, commentBody});
    setUserName('');
    setCommentBody('');
  }

    return (
      <form
        className = "form-add"
        onSubmit = {handleSubmit}
      >
        <input
          className = "form-add__author"
          name = "userName"
          type = "text"
          placeholder = "Ваше имя"
          minLength = "3"
          required = {true}
          value = {userName}
          onChange = { (e) => setUserName(e.target.value)}
        />
        <textarea
          className = "form-add__text"
          name = "commentBody"
          placeholder = "Ваш комментарий"
          rows = "6"
          required = {true}
          value = {commentBody}
          onChange = {(e)=> setCommentBody(e.target.value)}
        >
      </textarea>
        <button className = "submit">
          Добавить
        </button>
      </form>
    );
};

export default FormNewComment;
