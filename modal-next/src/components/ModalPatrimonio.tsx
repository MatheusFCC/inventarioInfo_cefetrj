import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import style from '../style/Modal.module.css';


 {/*       PATRIMONIO(

	TOMBO, ESPECIFICACAO, MARCA, MODELO, SERIE, DATAENTRADA, EMPENHO, PROCESSO,
	NOTAFISCAL, FORNECEDOR, SOLICITANTE, VALOR, RESPONSAVEL, LOCALIZACAO, DATAINV, FOTO, OBS;

)*/}

export function ModalPatrimonio( ) {   
    
    const {ChangeCode} = useContext(ModalContext);
    const x = 0;

    return(

        

        <div className={style.overlay}>

                <form  className={style.CadastroFuncionario}>
                    <fieldset>
                    <legend>PATRIMONIO</legend>
                    <strong>Insira seus dados!</strong>

                    {/*TOMBO*/}
                <div className="input-block">
                    <label htmlFor="TOMBO">TOMBO:</label>
                    <input id="TOMBO" />
                </div>

                    {/*ESPECIFICACAO*/}
                <div className="input-block">
                    <label htmlFor="ESPECIFICACAO">ESPECIFICACAO:</label>
                    <input id="ESPECIFICACAO"  />
                </div>

                    {/*MARCA*/}
                <div className="input-block">
                    <label htmlFor="MARCA">MARCA:</label>
                    <input id="MARCA"  />
                </div>

                    {/*MODELO*/}
                <div className="input-block">
                    <label htmlFor="MODELO">MODELO:</label>
                    <input id="MODELO"  />
                </div>

                    {/*SERIE*/}
                <div className="input-block">
                    <label htmlFor="SERIE">SERIE:</label>
                    <input id="SERIE"  />
                </div>
                
                    {/*DATAENTRADA*/}
                <div className="input-block">
                    <label htmlFor="DATAENTRADA">DATAENTRADA</label>
                    <input id="DATAENTRADA" type='date'/>
                </div>

                    {/*EMPENHO*/}
                <div className="input-block">
                    <label htmlFor="EMPENHO">EMPENHO:</label>
                    <input id="EMPENHO"  />
                </div>

                    {/*PROCESSO*/}
                <div className="input-block">
                    <label htmlFor="PROCESSO">PROCESSO:</label>
                    <input id="PROCESSO"  />
                </div>

                    {/*NOTAFISCAL*/}
                <div className="input-block">
                    <label htmlFor="NOTAFISCAL">NOTAFISCAL:</label>
                    <input id="NOTAFISCAL"  />
                </div>

                    {/*FORNECEDOR*/}
                <div className="input-block">
                    <label htmlFor="FORNECEDOR">FORNECEDOR:</label>
                    <input id="FORNECEDOR"  />
                </div>

                    {/*SOLICITANTE*/}
                <div className="input-block">
                    <label htmlFor="SOLICITANTE">SOLICITANTE:</label>
                    <input id="SOLICITANTE"  />
                </div>
                
                  {/*VALOR*/}
                <div className="input-block">
                    <label htmlFor="VALOR">VALOR:</label>
                    <input id="VALOR"  />
                </div>

                                
                  {/*RESPONSAVEL*/}
                  <div className="input-block">
                    <label htmlFor="RESPONSAVEL">RESPONSAVEL:</label>
                    <input id="RESPONSAVEL"  />
                </div>

                                
                  {/*LOCALIZACAO*/}
                  <div className="input-block">
                    <label htmlFor="LOCALIZACAO">LOCALIZACAO:</label>
                    <input id="LOCALIZACAO"  />
                </div>


                   {/*DATAINV*/}
                <div className="input-block">
                    <label htmlFor="DATAINV">DATAINV:</label>
                    <input id="LOCALIZACAO" type='date'/><br/>
                </div>


                    {/*FOTO*/}
                <label htmlFor="image[]" className="new-image"> FOTO:</label>
                <input multiple type="file" id="image[]" />

                
                    {/*OBS*/}
                <div className="input-block">
                    <label htmlFor="OBS">OBS:</label>
                    <textarea id="OBS" maxLength={300}  />
                </div>


                <button type="button" onClick={() => {ChangeCode(x)}}>
                Cadastrar
                </button>
                </fieldset>
                </form>
            </div>


    );
}