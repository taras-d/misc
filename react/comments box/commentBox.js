
// Comment
var Comment = React.createClass({

    render: function() {

        console.log('Comment.render');

        return (
            <div className="comment">
                <div className="info">
                    <span className="author">{this.props.author}</span>
                    <span className="date">{this.props.date}</span>
                </div>
                <div className="text">
                    <pre>{this.props.text}</pre>
                </div>
            </div>
        );

    }

});

// Comment list
var CommentList = React.createClass({

    id: 1,

    render: function() {

        console.log('CommentList.render');

        var markup = [],
            data = this.props.data,
            isDataEmpty = (!data || data.length == 0);

        if (!isDataEmpty) {
            data.forEach(function(comment) {
                markup.push(
                    <Comment key={this.id++}
                        author={comment.author}
                        date={comment.date.toLocaleString()}
                        text={comment.text}/>
                );
            }.bind(this));
        }

        return (
            <div className="comment-list">
                {markup}
                <div className="no-comments"
                    style={{display: (isDataEmpty)? 'block': 'none'}}>
                    No comments yet
                </div>
            </div>
        );
    }

});

// Comment Form
var CommentForm = React.createClass({

    getInitialState: function() {
        return {
            author: '',
            text: ''
        };
    },

    onAuthorChange: function(e) {
        this.setState({ author: e.target.value });
    },

    onTextChange: function(e) {
        this.setState({ text: e.target.value });
    },

    onSubmit: function(e) {

        e.preventDefault();

        var author = this.state.author,
            text = this.state.text,
            date = new Date();

        if (!author || !text) {
            return;
        }

        this.setState({ author: '', text: '' });

        this.refs.author.focus();

        this.props.onPublish({
            author: author,
            text: text,
            date: date
        });
    },

    render: function() {

        console.log('CommentForm.render');

        return (
            <div className="comment-form">
                <h4 className="header">Leave comment</h4>
                <form onSubmit={this.onSubmit}>
                    <input className="author"
                        placeholder="Your Name"
                        ref="author"
                        value={this.state.author}
                        onChange={this.onAuthorChange}/>
                    <textarea className="text"
                        placeholder="Your Comment"
                        value={this.state.text}
                        onChange={this.onTextChange}/>
                    <input type="submit"
                        className="publish"
                        value="Publish"
                        disabled={!this.state.author || !this.state.text}/>
                </form>
            </div>
        );

    }

});

// Comment Box
var CommentBox = React.createClass({

    getInitialState: function() {
        return {
            comments: []
        };
    },

    onPublish: function(comment) {

        var comments = this.state.comments;
        comments.push(comment);

        this.setState({ comments: comments });

    },

    render: function() {

        console.log('CommentBox.render');

        return (
            <div className="comment-box">
                <h3 className="header">Comment Box</h3>
                <CommentList data={this.state.comments}/>
                <CommentForm onPublish={this.onPublish}/>
            </div>
        );

    }

});

ReactDOM.render(
    <CommentBox/>,
    document.getElementById('content')
);
