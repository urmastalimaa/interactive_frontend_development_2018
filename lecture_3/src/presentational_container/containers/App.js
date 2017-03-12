import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AppHeader from '../components/AppHeader';
import CommentList from '../components/CommentList';
import ControlledCommentForm from '../components/ControlledCommentForm';
import UncontrolledCommentForm from '../components/UncontrolledCommentForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastCommentId: 0,
      comments: []
    };
    this.addComment = this.addComment.bind(this);
  }

  addComment(comment) {
    const newCommentId = this.state.lastCommentId + 1;
    const newComments = this.state.comments.concat({...comment, id: newCommentId});
    this.setState({
      lastCommentId: newCommentId,
      comments: newComments
    });
  }

  render() {
    // Any components can expose functions such as focus, a form being
    // controlled/uncontrolled makes no difference.
    return (
      <div>
        <AppHeader />
        <ControlledCommentForm
          ref={(form) => this.controlledForm = form }
          onSubmit={(comment) => {
            this.addComment(comment);
            if (this.props.focusForms) {
              this.controlledForm.focus();
            }
          }}
          text='Submit comment'
        />
        <UncontrolledCommentForm
          ref={(form) => this.uncontrolledForm = form }
          onSubmit={(comment) => {
            this.addComment(comment);
            if (this.props.focusForms) {
              this.uncontrolledForm.focus();
            }
          }}
          text='Submit comment'
        />
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}

App.propTypes = {
  focusForms: PropTypes.bool.isRequired
};

App.defaultProps = {
  focusForms: true
};

export default App;
