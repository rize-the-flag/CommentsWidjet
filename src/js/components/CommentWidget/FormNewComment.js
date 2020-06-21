import React from 'react';

class FormNewComment extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      userName: '',
      commentBody: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange( ev ) {
    const {name, value} = ev.target;
    this.setState( {
                     [name]: value,
                   } );
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const {onSubmit} = this.props;
    onSubmit(this.state);
    this.setState({
                    userName: '',
                    commentBody: ''
                  })
  }

  render() {
    const {userName, commentBody} = this.state;
    return (
      <form
        className = "form-add"
        onSubmit = {this.handleSubmit}
      >
        <input
          className = "form-add__author"
          name = "userName"
          type = "text"
          placeholder = "Ваше имя"
          minLength = "3"
          required = {true}
          value = {userName}
          onChange = {this.handleChange}
        />
        <textarea
          className = "form-add__text"
          name = "commentBody"
          placeholder = "Ваш комментарий"
          rows = "6"
          required = {true}
          value = {commentBody}
          onChange = {this.handleChange}
        >
      </textarea>
        <button className = "submit">
          Добавить
        </button>
      </form>
    );
  }


}

export default FormNewComment;
