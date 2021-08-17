import {useState, createContext, ReactNode} from "react";
import { Modal } from "../components/Modal";
import { ModalConsumo } from "../components/ModalConsumo";
import { ModalPatrimonio } from "../components/ModalPatrimonio";



interface ModalproviderProps{
    children: ReactNode;
}

interface ModalData {
    activeModal:boolean;

    openModal: () => void;
    closeModal: () => void;
    ChangeCode: (number) => number; 
    code: number;

}

export const ModalContext = createContext({} as ModalData);

export function ModalProvider({children}:ModalproviderProps ){

    const [activeModal, setActiveModal ] = useState(false);
    const [code, setCode]= useState(0);



    function ChangeCode(x){

        setCode(x);

        if( code == 1){
            setActiveModal(true);

        }

        else if( code == 2){
            setActiveModal(true);

        }

        else if( code == 3){
            setActiveModal(true);

        }
        else{
            setActiveModal(false);
        }


    }

    return(
        <ModalContext.Provider 
        value={{
            activeModal,
            ChangeCode,
            code
            }}>
        {children}
        
        { code == 1  && <Modal />}
        { code == 2  && <ModalPatrimonio />}
        { code == 3  && <ModalConsumo />}
        </ModalContext.Provider>

    );

}