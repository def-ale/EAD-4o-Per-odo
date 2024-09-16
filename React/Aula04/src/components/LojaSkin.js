import React, { useContext } from 'react';

const LojaSkin = (props) => {
    const carteira = useContext(CarteiraContext);

    let botao;

    if (carteira >= props.gemas){
        botao = (<button className="botao-comprar">
                {props.gemas}
                <img src="./assets/imgs/diamante.gif" />
        </button>);
    } else {
        botao = (<div className="botao-comprar-desabilitado">
            {props.gemas}
        </div>);
    }
    return (
        <div className="card">
            <img src={`./assets/imgs/${props.imagem}`} />
            <div className="container">
                <p>{props.nome}</p>
                <button className="botao-comprar">
                    {props.gemas}
                    <img src="./assets/imgs/diamante.gif" />
                </button>
            </div>
        </div>
    );
}

export default LojaSkin;
