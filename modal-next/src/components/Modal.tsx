import { useContext, useState } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import style from '../style/Modal.module.css';


 {/*       FUNCIONARIO(

            SIAPE, NOME, DATANASC, TELRES, TELCEL, ENDERECO, EMAIL, CPF, RG, FUNCAO, CARGO; 
 )*/}



export function Modal( ) {   
    
    const {ChangeCode,code} = useContext(ModalContext);
    const [se, setSe] = useState(0);


    const x = 0;



    return(

        
      <div className={style.overlay}>

            <form  className={style.CadastroFuncionario}>
                <fieldset>
                <legend>FUNCIONARIO</legend>
                <strong>Insira seus dados!</strong>

                {/*SIAPE*/}
            <div className="input-block">
                <label htmlFor="SIAPE">SIAPE:</label>
                <input id="SIAPE" />
            </div>

                {/*Nome*/}
            <div className="input-block">
                <label htmlFor="name">Nome:</label>
                <input id="name"  />
            </div>

                {/*DATANASC*/}
            <div className="input-block">
                <label htmlFor="idade">Idade:</label>
                <input id="idade"  />
            </div>

                {/*TELRES*/}
            <div className="input-block">
                <label htmlFor="TelRes">Telefone Residencial:</label>
                <input id="TelRes"  />
            </div>

                {/*TELCEL*/}
            <div className="input-block">
                <label htmlFor="TelCel">Telefone Celular:</label>
                <input id="TelCel"  />
            </div>
            
                {/*ENDERECO*/}
            <div className="input-block">
                <label htmlFor="Endereco">Endereco</label>
                <input id="Endereco"  />
            </div>

                {/*EMAIL*/}
            <div className="input-block">
                <label htmlFor="Email">Email:</label>
                <input id="Email"  />
            </div>

                {/*CPF*/}
            <div className="input-block">
                <label htmlFor="CPF">CPF:</label>
                <input id="CPF"  />
            </div>

                {/*RG*/}
            <div className="input-block">
                <label htmlFor="RG">RG:</label>
                <input id="RG"  />
            </div>

                {/*FUNCAO*/}
            <div className="input-block">
                <label htmlFor="Funcao">Função:</label>
                <input id="Funcao"  />
            </div>

                {/*CARGO*/}
            <div className="input-block">
                <label htmlFor="Cargo">Cargo:</label>
                <input id="Cargo"  />
            </div>

            <button type="button" onClick={() => {ChangeCode(x)}}>
            Cadastrar
            </button>
            </fieldset>
            </form>
        </div>
    
        


    );
}