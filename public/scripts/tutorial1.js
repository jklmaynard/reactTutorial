var converter = new Showdown.converter();
var data = [
  {author: "Jane Brown", text: "This is one comment."},
  {author: "John White", text: "This is *another* comment."}
]
var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      <div className="commentBox">
        <h3> Comments </h3>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className = "commentForm">
        And Hello! I am a CommentForm.
      </div>
    )
  }
});

var Comment = React.createClass({
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString())//To rid browser of html tags.
    return (
      <div className="comment">
        <h4 className="commentAuthor">
          {this.props.author}
        </h4>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

React.render(
  <CommentBox url="comments.json" />,
  document.getElementById('content')
);
