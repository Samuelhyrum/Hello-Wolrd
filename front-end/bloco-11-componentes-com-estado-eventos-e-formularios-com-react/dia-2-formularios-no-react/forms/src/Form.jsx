import React, { Component } from 'react';
import Name from './Name';
import Email from './Email';
import Age from './Age';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
      terms: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }


  render() {
    const { email, anecdote, terms } = this.state;

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <legend>Informações pessoais</legend>

            <Name value={this.state.name} handleChange={this.handleChange}/>

            <Email value={this.state.email} handleChange={this.handleChange}/>

            <Age value={this.state.age} handleChange={this.handleChange}/>
            
          </fieldset>

          <fieldset>
            <legend>Texto e arquivos</legend>
            <label htmlFor="anecdote">
              Anedota:
              <textarea
                id="anecdote"
                name="anecdote"
                onChange={ this.handleChange }
                value={ anecdote }
              />
            </label>

            <input type="file" />
          </fieldset>

          <label htmlFor="terms">
            <input
              id="terms"
              type="checkbox"
              name="terms"
              onChange={ this.handleChange }
              value={ terms }
            />
            Concordo com termos e acordos
          </label>
        </form>
      </div>
    );
  }
}

export default Form;