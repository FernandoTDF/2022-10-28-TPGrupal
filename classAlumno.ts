import { TrabajoPractico } from "./classTabajoPractico";

export class Alumno {
    private nomber: string;
    private trabajoPracticos: TrabajoPractico[];
    private respuestas: string[];

    public constructor(pNombre: string) {
        this.nomber = pNombre;
    }

    public realizarTabajoPractico(pTrabajoParactico: TrabajoPractico, pRespuestas: string[]): boolean {
        for (let i: number = 0; i < this.trabajoPracticos.length; i++){
            this.trabajoPracticos.push(pTrabajoParactico)
            this.respuestas = pRespuestas;
        }
        return true;
    }
}