/** 
 * @class Representa uma calculadora.
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
     * Arredonda o valor do resultado baseado no tamanho da tela.
     * @param {float} value - O valor do resultado que deve ser arredondado
     * @return {float} - Retorna o valor arredondado
    */
    round(value) {
        /**
         * Verifica a quantidade de dígitos do valor passado:
        */
        let lenght = String(value).length;

        /**
         * Multiplica pelo tamanho em pixeis de cada dígito:
        */
        let numberWidht = lenght * 96;

        /**
         * Recebe a largura da página:
        */
        let pageWidht = window.screen.width;

        /**
         * Cria o objeto que deve receber o novo valor:
        */
        let newValue;

        /**
         * Verifica se a largura dos números é maior do que da página:
        */
        if(numberWidht > pageWidht) {
            /**
             * Encontra o máximo de digitos para a página:
            */
            let maxDigits = pageWidht / 96;

            /**
             * Arredonda o número para a quantidade de digitos máxima:
            */
            newValue = Number(value).toPrecision(maxDigits);
        }
        else{
            /**
             * Define o novo valor como o valor já passado:
            */
            newValue = value;
        }

        /**
         * Retorna o número arredondado:
        */
        return newValue;
    }

    /** 
     *  Soma dois números e atualiza o valor no Objeto result.
    */
    add() {
        /**
         * Verifica se os inputs são diferentes de vazios:
        */
        if(number1.value != "" && number2.value != ""){
            /** 
             * Cria uma variável que recebe a soma dos valores dos dois números e arredonda: 
            */
            let sum = parseFloat(number1.value) + parseFloat(number2.value);
            sum = this.round(sum);

            /** 
             * Adiciona, em formato de texto, o valor da soma no resultado: 
            */
            result.innerText = sum;   

            /** 
             * Retorna 0 caso não tenha acontecido erros: 
            */
            return 0; 
        }

        /**
         * Retorna 1 pelo fato que a operação não pode ser realizada uma vez que um dos inputs está vazio:
        */
        return 1;
    }

    /** 
     *  Subtrai dois números e atualiza o valor no Objeto result.
    */
    sub() {
        /**
         * Verifica se os inputs são diferentes de vazios:
         */
        if(number1.value != "" && number2.value != ""){
            /**
            * Cria uma variável que recebe a subtração dos valores dos dois números e arredonda:
            */
            let sub = parseFloat(number1.value) - parseFloat(number2.value);
            sub = this.round(sub);

            /**
             * Adiciona, em formato de texto, o valor da subtração no resultado:
            */
            result.innerText = sub;

            /**
             * Retorna 0 caso não tenha acontecido erros:
            */
            return 0;
        }

        /**
         * Retorna 1 pelo fato que a operação não pode ser realizada uma vez que um dos inputs está vazio:
         */
        return 1;
    }

    /** 
     *  Multiplica dois números e atualiza o valor no Objeto result.
    */
    mult() {
        /**
         * Verifica se os inputs são diferentes de vazios:
        */
        if(number1.value != "" && number2.value != ""){
            /**
             * Cria uma variável que recebe a multiplicação dos valores dos dois números e arredonda:
            */
            let mult = parseFloat(number1.value) * parseFloat(number2.value);
            mult = this.round(mult);

            /**
             * Adiciona, em formato de texto, o valor da multiplicação no resultado:
            */
            result.innerText = mult;

            /**
             * Retorna 0 caso não tenha acontecido erros:
            */
            return 0;
        }
        
        /**
         * Retorna 1 pelo fato que a operação não pode ser realizada uma vez que um dos inputs está vazio:
        */
         return 1; 
    }

    /** 
     *  Divide dois números e atualiza o valor no Objeto result.
    */
    div() {
        /**
         * Verifica se os inputs são diferentes de vazios:
        */
        if(number1.value != "" && number2.value != ""){
            /**
             * Cria uma variável que recebe a divisão dos valores dos dois números e arredonda:
            */
            let div = parseFloat(number1.value) / parseFloat(number2.value);
            div = this.round(div);
            /**
             * Adiciona, em formato de texto, o valor da divisão no resultado:
            */
            result.innerText = div;

            /**
             * Retorna 0 caso não tenha acontecido erros:
            */
            return 0;
        }
        
        /**
         * Retorna 1 pelo fato que a operação não pode ser realizada uma vez que um dos inputs está vazio:
        */
         return 1;
    }

    /**
     * Limpa todos os valores expostos nos objetos da tela.
    */
    clear() {
        /**
         * Limpa o valor do Objeto result:
        */
        result.innerText = 0;
        /**
         * Limpa o valor do Objeto number1:
        */
        number1.value = "";
        /**
         * Limpa o valor do Objeto number2:
        */
        number2.value = "";
    }
}

/** 
 * @constant {Calc} calc - Faz o instânciamento da classe Calc() em um objeto passando os Objetos HTML.
*/
const calc = new Calc($("#number1"), $("#number2"), $("#result"));