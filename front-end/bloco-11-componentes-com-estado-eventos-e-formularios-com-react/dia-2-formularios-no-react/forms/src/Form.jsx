import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            name: '',
            age: '',
            anecdote: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({target}) {
        const { name, value} = target;
        this.setState({
            [name] : value,
        });
    }

    render() {
        const { email, name, age, anecdote } = this.state;
        return (

            <div>
                <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
                <form className="form">

                    <label htmlFor="name">
                        Nome:
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={this.handleChange}
                            value={name}
                        />
                    </label>

                    <label htmlFor="email">
                        Email:
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                            value={email}
                        />
                    </label>

                    <label htmlFor="age">
                        Idade:
                        <select
                            id="age"
                            name="age"
                            defaultValue=""
                            onChange={this.handleChange}
                            value={age}
                        >
                            <option value="">Selecione</option>
                            <option value="adult">Maior que 18</option>
                            <option value="underage">Menor que 18</option>
                        </select>
                    </label>
                    <br></br>
                    <label htmlFor="anecdote">
                        Anedota:
                        <textarea id="anecdote" name="anecdote" onChange={this.handleChange} value={anecdote} />
                    </label>

                </form>
            </div>
        );
    }
}

export default Form;