import React, { Component } from 'react';
import PropTypes  from 'prop-types';

class Name extends Component {
    render(){
        const {name, handleChange} = this.props;
        return (

            <label htmlFor="name">
              Nome:
              <input
                id="name"
                name="name"
                type="text"
                onChange={ handleChange }
                value={ name.toUpperCase() }
              />
              <span>
              { !name.length ? ' -nome inválido- ' : ' -ok- '}
              </span>
            </label>
        )
    }
}
Name.propTypes = {
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}
export default Name;