var memoria;

function Calculadora(){
    this.memoria=0;
    this.otra = function (){console.log("hola!")};//!MAL
}
Calculadora.prototype.sumar = function (operando1,operando2){
    return parseFloat(operando1)+parseFloat(operando2);
}

Calculadora.prototype.restar = function (operando1,operando2){
    return parseFloat(operando1)-parseFloat(operando2);
}

Calculadora.prototype.multiplicar = function (operando1,operando2){
    return parseFloat(operando1)*parseFloat(operando2);
}

Calculadora.prototype.dividir = function (operando1,operando2){
    return parseFloat(operando1)/parseFloat(operando2);
}

Calculadora.prototype.operate = function  (operando1,operando2,operacion){
    switch (operacion){
            case "+":{
                return parseFloat(this.memoria)+parseFloat(operando2);
//                return parseFloat(operando1)+parseFloat(operando2);
            } case "-":{
                return parseFloat(this.memoria)-parseFloat(operando2);
            } case "*":{
                return parseFloat(this.memoria)*parseFloat(operando2);
            } case "/":{
                return parseFloat(this.memoria)/parseFloat(operando2);
            }
    }

}
