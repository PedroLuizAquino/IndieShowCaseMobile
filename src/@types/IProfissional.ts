import IUsuario from "./IUsuario";

export default interface IProfissional extends IUsuario {
  pro_id: number;
  pro_descricao: string;
  usu_id: number;
}
