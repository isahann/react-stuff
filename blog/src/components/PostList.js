import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Postlist</div>;
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
