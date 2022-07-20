import React, { Component } from "react";

class UserProfile extends Component {
    render() {
        // console.log(this.props.user);
        const { user } = this.props;
        const { id, name, email, avatar } = user;
        return (
            <ul>
                <li>Id: {id}</li>
                <li>Name: {name}</li>
                <li>E-mail: {email}</li>
                <li>Avatar: {avatar}</li>
            </ul>
        );
    }
}
export default UserProfile;