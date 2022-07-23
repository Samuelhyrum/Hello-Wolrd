import React, { Component } from 'react';

class Name extends Component {
    render(){
        const {value, handleChange} = this.props;
        return (

            <label htmlFor="name">
              Nome:
              <input
                id="name"
                name="name"
                type="text"
                onChange={ handleChange }
                value={ value.toUpperCase() }
              />
            </label>
        )
    }
}

export default Name;