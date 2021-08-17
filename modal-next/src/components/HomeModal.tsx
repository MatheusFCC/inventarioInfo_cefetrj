import style from '../style/Home.module.css';
import { useContext, useState } from "react";
import { ModalContext } from "../contexts/ModalContext";



export function HomeModal(){

     const {ChangeCode} = useContext( ModalContext);
     const x = 1;
     const y = 2;
     const z = 3;

    return(

        <div className={style.menu} >
            <button onClick ={() => { ChangeCode(x)}} > Funcionario </button>


            <button onClick ={() => { ChangeCode(y)}}> Patrimonio </button>


            <button onClick ={() => {ChangeCode(z)}}> Consumo </button>

        </div>

        
        

    );
}