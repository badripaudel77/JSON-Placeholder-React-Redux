import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions'


class User extends Component {
    componentDidMount() {
    this.props.getUser(this.props.userId);
    }

    render() {
        const { user } = this.props;
        // const user = this.props.users.find((user) => user.id === this.props.userId);
        return (
            <div>
                {user && <h3>{user.name}</h3>}
                {/* {console.log(this.props.user)} */}
            </div>
        );
    }
}

const mapStateToProps = (state, /* */ ownProps) => {
    // return { users : state.users }
    return {
         user: state.users.find((user) => user.id === ownProps.userId)
    }
}

export default connect(mapStateToProps, {
    getUser,
})(User);