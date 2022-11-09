/** 
 * @class Representa uma calculadora: 
*/
class Calc {
    /** 
     * @constructor
     * @param {Object} number1 - O objeto HTML que contém o primeiro número da calculadora 
     * @param {Object} number2 - O objeto HTML que contém o segundo número da calculadora
     * @param {Object} result - O objeto HTML que contém o resultado da calculadora
    */
    constructor(number1, number2, result) {
        this.number1 = number1;
        this.number2 = number2;
        this.result = result;
    }

    /** 
     *  Soma dois números e atualiza o valor no Objeto result: 
     *  @return 0 - Retorna 0 no caso de não ter havido erros na execução:
    */
    add() {
        /** 
         * Cria uma variável que recebe a soma dos valores dos dois números: 
        */
        let sum = parseFloat(number1.value) + parseFloat(number2.value);

        /** 
         * Adiciona, em formato de texto, o valor da soma no resultado: 
        */
        result.innerText = sum;   

        /** 
         * Retorna 0 caso não tenha acontecido erros: 
        */
        return 0; 
    }

    sub() {
        /**
         * Cria uma variável que recebe a subtração dos valores dos dois números:
         */

        let sub = parseFloat(number1.value) - parseFloat(number2.value);

        /**
         * Adiciona, em formato de texto, o valor da subtração no resultado:
         */

        result.innerText = sub;

        /**
         * Retorna 0 caso não tenha acontecido erros:
         */
        return 0;
    }

    mult() {
        /**
         * Cria uma variável que recebe a multiplicação dos valores dos dois números:
         */

        let mult = parseFloat(number1.value) * parseFloat(number2.value);

        /**
         * Adiciona, em formato de texto, o valor da multiplicação no resultado:
         */

        result.innerText = mult;

        /**
         * Retorna 0 caso não tenha acontecido erros:
         */
        return 0;
    }

    div() {
        /**
         * Cria uma variável que recebe a divisão dos valores dos dois números:
         */

        let div = parseFloat(number1.value) / parseFloat(number2.value);

        /**
         * Adiciona, em formato de texto, o valor da divisão no resultado:
         */

        result.innerText = div;

        /**
         * Retorna 0 caso não tenha acontecido erros:
         */
        return 0;
    }
}

/** 
 * @constant {Calc} calc - Faz o instânciamento da classe Calc() em um objeto passando os Objetos HTML: 
*/
const calc = new Calc($("#number1"), $("#number2"), $("#result"));