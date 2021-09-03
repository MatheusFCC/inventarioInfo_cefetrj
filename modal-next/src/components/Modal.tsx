import { useContext, useState, FormEvent, ChangeEvent   } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import api from '../services/api';
import style from '../style/Modal.module.css';


 {/*       FUNCIONARIO(

            SIAPE, NOME, DATANASC, TELRES, TELCEL, ENDERECO, EMAIL, CPF, RG, FUNCAO, CARGO; 
 )*/}



export function Modal( ) {   
    
    const {ChangeCode,code} = useContext(ModalContext);
    const [se, setSe] = useState(0);

    const [siape, setSiape] = useState('');
    const [name, setName] = useState('');
    const [idade, setIdade] = useState('');
    const [telres, setTelres] = useState('');
    const [telcel, setTelcel] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [funcao, setFuncao] = useState('');
    const [cargo, setCargo] = useState('');
    const [images, setImages] = useState<File[]>([]);


    const x = 0;


    function handleSelectImages(event: ChangeEvent<HTMLInputElement> ){
    
        console.log(event.target.files)
        if(!event.target.files){
          return;
        }
        
        const selectedImages = Array.from(event.target.files)
        setImages(selectedImages);
    /*
        const selectedImagesPreview = selectedImages.map( image => {
          return URL.createObjectURL(image);
        });
        setPreviewImages(selectedImagesPreview);*/
      }

    async function handleSubmit(event:FormEvent){
        event.preventDefault();

        const formulario = new FormData();


        formulario.append('SIAPE',siape);
        formulario.append('nome',name);
        formulario.append('idade',idade);
        formulario.append('telefone_residencial',telres);
        formulario.append('telefone_celular',telcel);
        formulario.append('endereco',endereco);
        formulario.append('email',email);
        formulario.append('cpf',cpf);
        formulario.append('rg',rg);
        formulario.append('funcao',funcao);
        formulario.append('cargo',cargo);

        images.forEach( image => {
            formulario.append('images' , image);
          });


        await api.post('funcionarios', formulario)
       /* console.log(
        {siape,
            name,
            idade,
            telres,
            telcel,
            endereco,
            email,
            cpf,
            rg,
            funcao,
            cargo}
        )*/
            alert('Cadastrado com sucesso!');
    }


    return(

        
      <div className={style.overlay}>

            <form onSubmit={handleSubmit} className={style.CadastroFuncionario}>
                <fieldset>
                <legend>FUNCIONARIO</legend>
                <strong>Insira seus dados!</strong>

                {/*SIAPE*/}
            <div className="input-block">
                <label htmlFor="SIAPE">SIAPE:</label>
                <input id="SIAPE"  value={siape} onChange={ event => setSiape(event.target.value)} />
            </div>

                {/*Nome*/}
            <div className="input-block">
                <label htmlFor="name">Nome:</label>
                <input id="name"   value={name} onChange={ event => setName(event.target.value)}  />
            </div>

                {/*DATANASC*/}
            <div className="input-block">
                <label htmlFor="idade">Idade:</label>
                <input id="idade" value={idade} onChange={ event => setIdade(event.target.value)} />
            </div>

                {/*TELRES*/}
            <div className="input-block">
                <label htmlFor="TelRes">Telefone Residencial:</label>
                <input id="TelRes" value={telres} onChange={ event => setTelres(event.target.value)} />
            </div>

                {/*TELCEL*/}
            <div className="input-block">
                <label htmlFor="TelCel">Telefone Celular:</label>
                <input id="TelCel" value={telcel} onChange={ event => setTelcel(event.target.value)} />
            </div>
            
                {/*ENDERECO*/}
            <div className="input-block">
                <label htmlFor="Endereco">Endereco</label>
                <input id="Endereco" value={endereco} onChange={ event => setEndereco(event.target.value)}  />
            </div>

                {/*EMAIL*/}
            <div className="input-block">
                <label htmlFor="Email">Email:</label>
                <input id="Email" value={email} onChange={ event => setEmail(event.target.value)}  />
            </div>

                {/*CPF*/}
            <div className="input-block">
                <label htmlFor="CPF">CPF:</label>
                <input id="CPF" value={cpf} onChange={ event => setCpf(event.target.value)} />
            </div>

                {/*RG*/}
            <div className="input-block">
                <label htmlFor="RG">RG:</label>
                <input id="RG" value={rg} onChange={ event => setRg(event.target.value)} />
            </div>

                {/*FUNCAO*/}
            <div className="input-block">
                <label htmlFor="Funcao">Função:</label>
                <input id="Funcao" value={funcao} onChange={ event => setFuncao(event.target.value)} />
            </div>

                {/*CARGO*/}
            <div className="input-block">
                <label htmlFor="Cargo">Cargo:</label>
                <input id="Cargo" value={cargo} onChange={ event => setCargo(event.target.value)} />
            </div>
            
            {/*Imagem*/}
            <div className="input-block">
              <label htmlFor="images[]">Fotos</label> 
              <input multiple onChange={handleSelectImages} type="file" id="image[]" />
            </div>

            <button type="submit" >
            Cadastrar
            </button>
            </fieldset>
            </form>
        </div>
    
        


    );
}