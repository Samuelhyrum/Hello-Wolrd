import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Email extends Component {
    render() {
        const { email, handleChange} = this.props;
        return (
            <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
              onChange={ handleChange }
              value={ email }
            />
            <span>
             { !email.match(/^\S+@\S+$/i)
              ? ' -email inválido- ' : ' -ok- ' }
              </span>
          </label>

        )
    }

}
Email.propTypes = {
    handleChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}

export default Email;