import Funcionario from "../models/Funcionario";
import imagesView from './images_view';

export default {
    render(funcionario: Funcionario) {
      return {
        SIAPE: funcionario.SIAPE,
        nome: funcionario.nome,
        idade: funcionario.idade,
        telefone_residencial: funcionario.telefone_residencial ,
        telefone_celular:funcionario.telefone_celular,
        endereco: funcionario.endereco ,
        email: funcionario.email ,
        cpf: funcionario.cpf,
        rg: funcionario.rg,
        funcao: funcionario.funcao,
        cargo: funcionario.cargo,
        images: imagesView.renderMany(funcionario.images)
      }
    },

    renderMany(funcionarios: Funcionario[]) { 
        return funcionarios.map(funcionario => this.render(funcionario));
      }
}