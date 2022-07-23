import React, { Component } from 'react';

class Age extends Component {
    render() {
        const { age, handleChange} = this.props;
        return (
            <label htmlFor="age">
            Idade:
            <select
              id="age"
              name="age"
              onChange={ handleChange }
              value={ age }
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>
        )
    }
}

export default Age;