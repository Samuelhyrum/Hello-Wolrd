import React, { useContext, useState } from "react";
import FormContext from '../context/FormContext';

function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
    const [module, setModule] = useState();

    const { addData } = useContext(FormContext);

    const handleClick = (event) => {
        event.preventDefault();
        const personalInfo = {
            name,
            age,
            location,
            module,
          };
          addData(personalInfo);
    }
    return (
        <form>
            <fieldset>
                <legend>
                    Dados Pessoais
                </legend>
                <label htmlFor="name">
                    Nome Completo
                <input
                type='text'
                id='name'
                value={name}
                onChange={({target}) => setName(target.value)}
                placeholder='Qual seu nome?'
                />
                </label>
                <br/>
                <label htmlFor="age">
                    Idade
                    <input
                    type='number'
                    id='age'
                    value={age}
                    onChange={({target}) => setAge(target.value)}
                    placeholder='Qual sua idade?'
                    />
                </label>
                <br/>
                <label htmlFor="city">
                    Cidade/UF
                    <input
                    type='text'
                    id='city'
                    value={location} 
                    onChange={({target}) => setLocation(target.value)}
                    placeholder='De onde você é?'
                    />
                </label>
                <br/>
            </fieldset>
                <fieldset>
                    <legend>
                        Módulo
                    </legend>
                    <label htmlFor="fundamentals">
                        Fundamentos
                        <input
                        type='radio'
                        id='fundamentals'
                        name='module'
                        value='Fundamentos'
                        checked={module === 'Fundamentos'}
                        onChange={({target}) => setModule(target.value)}
                        />
                    </label>
                    <br/>
                    <label htmlFor="back-end">
                        Back-end
                        <input
                        type='radio'
                        id='backend'
                        name='module'
                        value='Back-end'
                        checked={module === 'Back-end'}
                        onChange={({target}) => setModule(target.value)}
                        />
                    </label>
                    <br/>
                    <label htmlFor="front-end">
                        Front-end
                        <input
                        type='radio'
                        id='frontend'
                        name='module'
                        value='Front-end'
                        checked={module === 'Front-end'}
                        onChange={({target}) => setModule(target.value)}
                        />
                    </label>
                    <br/>
                    <label htmlFor="cs">
                    Ciência da computação
                        <input
                        type='radio'
                        id='cs'
                        name='module'
                        value=' Ciência da computação'
                        checked={module === ' Ciência da computação'}
                        onChange={({target}) => setModule(target.value)}
                        />
                    </label>
                 </fieldset>
                 <button
                 type='submit'
                 onClick={handleClick}
                 >
                    Enviar
                 </button>
        </form>
 );
}

export default Form;