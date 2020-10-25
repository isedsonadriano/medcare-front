import { Medico } from './medico';
import { Paciente } from './paciente';
import { Procedimento } from './procedimento';

export class Atendimento {
    
    id: number;
    dataCadastro:string;
    medico: Medico;
    procedimentos: Procedimento[];
    paciente: Paciente;
    observacoes: string;
    tipo:string;
    tipoAtendimento: string;
    status: string;
   
}
