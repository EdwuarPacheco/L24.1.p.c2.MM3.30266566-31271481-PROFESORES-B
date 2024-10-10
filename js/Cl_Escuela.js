export default class Cl_Escuela {
    constructor() {
        this.aumTotal = 0;
    }
    procesarProfesor(profesor) {
        this.acumTotal += profesor.calcularIngresos();
    }

    devolverTotal(){
        return this.aumTotal;
    }
}