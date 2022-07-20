import React from "react";

class Content extends React.Component {
    render() {
        const conteudos = [
            {
                conteudo: 'High Order Functions',
                bloco: 8,
                status: 'Aprendido'
            },
            {
                conteudo: 'Composicao de Componentes',
                bloco: 11,
                status: 'Aprendendo',
            },
            {
                conteudo: 'Composicao de Estados',
                bloco: 12,
                status: 'Aprenderei'
            },
            {
                conteudo: 'Redux',
                bloco: 16,
                status: 'Aprenderei'
            },
        ];

        return (
            <main>
                {conteudos.map((conteudo, index) => {
                    return (
                        <div className='Content' key={index}> <li>
                            O conteúdo é:  {conteudo.conteudo}
                        </li >
                            <li>
                                Status: {conteudo.status}
                            </li>
                            <li>
                                Bloco: {conteudo.bloco}
                            </li>
                            <br>
                            </br>
                        </div>
                    )
                })}

            </main>
        );
    }
}

export default Content;