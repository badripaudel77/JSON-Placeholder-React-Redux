import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions'


class User extends Component {
    componentDidMount() {
    this.props.getUser(this.props.userId);
    }

    render() {

        const user = this.props.users.find((user) => user.id === this.props.userId);
        return (
            <div>
                {user && <h3>{user.name}</h3>}
                {/* {console.log(this.props.users)} */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { users : state.users }
}

export default connect(mapStateToProps, {
    getUser,
})(User);