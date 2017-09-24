import React from 'react';

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign(
      {},
      this.state,
      {product_id: this.props.productId}
    );
    this.props.createComment(comment);
    this.setState({ body: ""});
  }

  addComments() {
    let commentForm;
    if (this.props.loggedIn) {
      commentForm = <form className="comment-form" onSubmit={this.handleSubmit}>
        <textarea value={this.state.body} onChange={this.handleChange}/>
        <input type="submit" value="Submit Comment"/>
      </form>;
    } else {
      commentForm = <div>Login to add comments.</div>;
    }
    return commentForm;
  }

  render() {
    return (
      <div>
        {this.addComments()}
      </div>
    );
  }
}