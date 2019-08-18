import React, { Component } from 'react'
import CommentBox from './CommentBox';
import CommentList from './CommentList';

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['this if my first reply']
    }
    this.addComment = this.addComment.bind(this)
    this.deletecomment = this.deletecomment.bind(this)
  }
  // 添加留言
  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }
  // 删除留言
  deletecomment(deleteIndex) {
    this.setState({
      comments: this.state.comments.filter((item, index) => {return index !== deleteIndex})
    })
  }
  render() {
    const { comments } = this.state
    return (
      <div className="App">
        <CommentList comments={comments} onDeleteComment={this.deletecomment}></CommentList>
        <CommentBox 
          commentsLength={comments.length}
          onAddComment={this.addComment}></CommentBox>
      </div>
    );
  }
}

export default Comment;