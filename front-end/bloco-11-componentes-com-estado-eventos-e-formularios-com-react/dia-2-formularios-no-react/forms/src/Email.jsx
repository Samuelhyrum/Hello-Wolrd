import React, { Component } from 'react';

class Email extends Component {
    render() {
        const { value, handleChange} = this.props;
        return (
            <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
              onChange={ handleChange }
              value={ value }
            />
          </label>

        )
    }

}

export default Email;