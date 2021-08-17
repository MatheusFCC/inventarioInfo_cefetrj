import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import style from '../style/Modal.module.css';


 {/*
CONSUMO(

	ESPECIFICACAO, MARCA, DATAENTRADA, EMPENHO, PROCESSO, NOTAFISCAL, FORNECEDOR, QTD, DATAVALIDADE, FOTO,
	OBS;

)*/}

export function ModalConsumo( ) {   
    
    const {ChangeCode} = useContext(ModalContext);
    const x = 0;

    return(

        

        <div className={style.overlay}>

                <form  className={style.CadastroFuncionario}>
                    <fieldset>
                    <legend>CONSUMO</legend>
                    <strong>Insira seus dados!</strong>

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

                  {/*QTD*/}
                <div className="input-block">
                    <label htmlFor="QTD">QUANTIDADE:</label>
                    <input id="QTD"  />
                </div>

                   {/*DATAVALIDADE*/}
                <div className="input-block">
                    <label htmlFor="DATAVALIDADE">DATAVALIDADE:</label>
                    <input id="DATAVALIDADE" type='date'/>
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