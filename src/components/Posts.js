import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../actions';

import './Posts.css';

class Posts extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    renderList() {
       
        return this.props.posts.slice(0,20).map(post => {
            return (
                <div className="posts__container" key={post.id}>
                   <h2>{post.title}</h2>
                   <p>{post.body}</p>
                   <hr />
                </div>
            );
        })
    }

    render() {
      return (
            <div className="postlist">
                {console.log(this.props.posts)}
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
       
    return { posts : state.posts }
}

//first arg is always mapStateToProps, if nothing to get, pass null
export default connect(mapStateToProps, {
    getPosts
})(Posts);