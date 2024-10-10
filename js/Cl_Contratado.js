import Cl_Profesor from "./Cl_Profesor.js";

export default class Cl_contratado extends Cl_Profesor{
    constructor(nombre, bono, horas){
        super(nombre, bono);
        this.horas = horas;
        this.tarifa = 10;
    }
    calcularIngresos(){
        return this.bono + (this.horas * this.tarifa);
    }
}
